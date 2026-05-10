-- Add category_order column and set display order for all categories
-- Run once in phpMyAdmin > SQL tab

ALTER TABLE menu_items ADD COLUMN category_order INT NOT NULL DEFAULT 0 AFTER category;

-- ── JELOVNIK ─────────────────────────────────────────────
UPDATE menu_items SET category_order = 1  WHERE section='jelovnik' AND category='Doručak';
UPDATE menu_items SET category_order = 2  WHERE section='jelovnik' AND category='Sendviči i tortilje';
UPDATE menu_items SET category_order = 3  WHERE section='jelovnik' AND category='Roštilj';
UPDATE menu_items SET category_order = 4  WHERE section='jelovnik' AND category='Fingerfood';
UPDATE menu_items SET category_order = 5  WHERE section='jelovnik' AND category='Burgeri';
UPDATE menu_items SET category_order = 6  WHERE section='jelovnik' AND category='Posno i salate';
UPDATE menu_items SET category_order = 7  WHERE section='jelovnik' AND category='Prilog';
UPDATE menu_items SET category_order = 8  WHERE section='jelovnik' AND category='Kids menu';
UPDATE menu_items SET category_order = 9  WHERE section='jelovnik' AND category='Prilozi';
UPDATE menu_items SET category_order = 10 WHERE section='jelovnik' AND category='Salate';
UPDATE menu_items SET category_order = 11 WHERE section='jelovnik' AND category='Slane palačinke';
UPDATE menu_items SET category_order = 12 WHERE section='jelovnik' AND category='Slatke palačinke';
UPDATE menu_items SET category_order = 13 WHERE section='jelovnik' AND category='Predlog UK22';

-- ── FASTFOOD ────────────────────────────────────────────
UPDATE menu_items SET category_order = 1 WHERE section='fastfood' AND category='Fast food';
UPDATE menu_items SET category_order = 2 WHERE section='fastfood' AND category='Dodaci';

-- ── PICE ────────────────────────────────────────────────
UPDATE menu_items SET category_order = 1  WHERE section='pice' AND category='Topli napici';
UPDATE menu_items SET category_order = 2  WHERE section='pice' AND category='Gazirani sokovi';
UPDATE menu_items SET category_order = 3  WHERE section='pice' AND category='Negazirani sokovi';
UPDATE menu_items SET category_order = 4  WHERE section='pice' AND category='Vode';
UPDATE menu_items SET category_order = 5  WHERE section='pice' AND category='Energetski napici';
UPDATE menu_items SET category_order = 6  WHERE section='pice' AND category='Žestoka pića';
UPDATE menu_items SET category_order = 7  WHERE section='pice' AND category='Viski';
UPDATE menu_items SET category_order = 8  WHERE section='pice' AND category='Rakija';
UPDATE menu_items SET category_order = 9  WHERE section='pice' AND category='Vino';
UPDATE menu_items SET category_order = 10 WHERE section='pice' AND category='Pivo';
UPDATE menu_items SET category_order = 11 WHERE section='pice' AND category='Kokteli';
