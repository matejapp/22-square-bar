// Convert PNG / JPEG / JFIF images in /public to WebP, resize to MAX_WIDTH.
// Originals are moved to public/_originals/ for safety — delete that folder
// after verifying everything still works.
//
// Run from client/:  node scripts/optimize-images.mjs

import { readdir, mkdir, rename, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const PUBLIC_DIR = path.resolve('./public')
const BACKUP_DIR = path.join(PUBLIC_DIR, '_originals')

// Skip these — favicons stay PNG, _originals stays untouched
const SKIP_DIRS = new Set(['favicons', '_originals'])
const TARGET_EXT = new Set(['.png', '.jpg', '.jpeg', '.jfif'])
const MAX_WIDTH = 1600
const QUALITY = 78

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      yield* walk(full)
    } else {
      yield full
    }
  }
}

let processed = 0
let savedBytes = 0
const failures = []

for await (const file of walk(PUBLIC_DIR)) {
  const ext = path.extname(file).toLowerCase()
  if (!TARGET_EXT.has(ext)) continue

  const dir = path.dirname(file)
  const base = path.basename(file, ext)
  const webpPath = path.join(dir, `${base}.webp`)

  // Skip if a webp version already exists and is newer
  if (existsSync(webpPath)) {
    const [origStat, webpStat] = await Promise.all([stat(file), stat(webpPath)])
    if (webpStat.mtimeMs >= origStat.mtimeMs) continue
  }

  try {
    const inStat = await stat(file)
    await sharp(file)
      .rotate() // honor EXIF orientation
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(webpPath)
    const outStat = await stat(webpPath)
    savedBytes += inStat.size - outStat.size

    // Back up original instead of deleting
    const relDir = path.relative(PUBLIC_DIR, dir)
    const backupSub = path.join(BACKUP_DIR, relDir)
    if (!existsSync(backupSub)) await mkdir(backupSub, { recursive: true })
    await rename(file, path.join(backupSub, path.basename(file)))

    processed++
    process.stdout.write(
      `✓ ${path.relative(PUBLIC_DIR, file)}  ${(inStat.size / 1024).toFixed(0)} KB → ${(outStat.size / 1024).toFixed(0)} KB\n`,
    )
  } catch (err) {
    failures.push({ file, err: err.message })
  }
}

console.log(`\nDone. ${processed} files processed.`)
console.log(`Saved approximately ${(savedBytes / 1024 / 1024).toFixed(1)} MB.`)
console.log(`Originals moved to: ${BACKUP_DIR}`)
if (failures.length) {
  console.warn(`\n${failures.length} failures:`)
  failures.forEach(({ file, err }) => console.warn(`  ${file}: ${err}`))
}
