// Validates required env vars at boot. Crash early with a clear message
// rather than discover the problem mid-request.
const REQUIRED = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'JWT_SECRET']

export function validateEnv() {
  const missing = REQUIRED.filter((k) => !process.env[k])
  if (missing.length) {
    console.error(
      `[env] Missing required environment variables: ${missing.join(', ')}`,
    )
    process.exit(1)
  }
  if (process.env.JWT_SECRET.length < 32) {
    console.error(
      '[env] JWT_SECRET must be at least 32 characters. Generate one with: node -e "console.log(require(\'crypto\').randomBytes(48).toString(\'hex\'))"',
    )
    process.exit(1)
  }
}
