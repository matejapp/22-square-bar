-- 22 Square Bar — Menu Seed Script
-- Run in phpMyAdmin > SQL tab. Safe to re-run (wipes existing items).
-- File encoding: UTF-8

DELETE FROM menu_items;
ALTER TABLE menu_items AUTO_INCREMENT = 1;

-- ============================================================
-- JELOVNIK
-- ============================================================

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Doručak', 'Doručak klasik', '3x jaje, pecivo, iceberg, paradajz, pavlaka', 350.00, 1, 1),
('jelovnik', 'Doručak', 'Doručak šunka sir', '3x jaje, pizza šunka, beli sir, kačkavalj, iceberg, paradajz, pecivo', 440.00, 1, 2),
('jelovnik', 'Doručak', 'Doručak seoski', '3x jaje, slanina, beli sir, paradajz, pavlaka, pecivo, iceberg', 480.00, 1, 3),
('jelovnik', 'Doručak', 'Doručak skver', '3x jaje, slanina, pecivo, tortilja, pizza šunka, kačkavalj, iceberg, paradajz', 530.00, 1, 4),
('jelovnik', 'Doručak', 'Punjene prženice', 'jaje, tost, pavlaka, kačkavalj, pizza šunka, pomfrit', 480.00, 1, 5);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Sendviči i tortilje', 'Index', 'pizza šunka, kačkavalj, pavlaka, iceberg, paradajz, krastavac, pečurke, pomfrit', 620.00, 1, 1),
('jelovnik', 'Sendviči i tortilje', 'Domaćinski', 'pavlaka, urnebes, slanina, šunka, kulen, jaje, kačkavalj, krastavac', 620.00, 1, 2),
('jelovnik', 'Sendviči i tortilje', 'Pohovana piletina', 'panirani pileći file, burger sos, iceberg, pomfrit', 620.00, 1, 3),
('jelovnik', 'Sendviči i tortilje', 'Cezar sendvič', 'pileći file, iceberg, cezar sos, parmezan, pomfrit', 620.00, 1, 4),
('jelovnik', 'Sendviči i tortilje', 'Klub sendvič', 'tost hleb, jaje, piletina, šunka, kačkavalj, kečap, majonez, mix salata, pomfrit, sos', 620.00, 1, 5),
('jelovnik', 'Sendviči i tortilje', 'Pileća tortilja', 'iceberg, pileći file, paradajz, krastavac, kačkavalj, čedar sir, tartar sos, pomfrit', 720.00, 1, 6),
('jelovnik', 'Sendviči i tortilje', 'Meksička tortilja', 'iceberg, junetina, paradajz, krastavac, kačkavalj, čedar sos, mayochili sos, pomfrit', 780.00, 1, 7),
('jelovnik', 'Sendviči i tortilje', 'Vegetarijanska tortilja', '2x čedar, kačkavalj, paradajz, krastavac, luk, tartar sos, pomfrit', 640.00, 1, 8),
('jelovnik', 'Sendviči i tortilje', 'Kesadilja piletina', 'pavlaka sos, piletina, kačkavalj, čedar sir, pomfrit', 660.00, 1, 9);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Roštilj', 'Pileći file', 'pileći file, pomfrit, pecivo, salata, kečap', 740.00, 1, 1),
('jelovnik', 'Roštilj', 'Punjeni pileći file', 'pileći file, kačkavalj, slanina, pomfrit, pecivo, salata, kečap', 880.00, 1, 2),
('jelovnik', 'Roštilj', 'Leskovačka pljeskavica', 'junetina, pekarski krompir, kajmak, pecivo, salata, luk', 780.00, 1, 3),
('jelovnik', 'Roštilj', 'Gurmanska pljeskavica', 'junetina, slanina, kačkavalj, pekarski krompir, kajmak, pecivo, salata, luk', 840.00, 1, 4),
('jelovnik', 'Roštilj', 'Mešano meso po osobi', 'juneći uštipci, ćevapi, kobasice, pileći file, pekarski krompir, salata, pecivo, urnebes', 780.00, 1, 5),
('jelovnik', 'Roštilj', 'Ćevapi', 'junetina, pekarski krompir, pecivo, urnebes, salata', 780.00, 1, 6),
('jelovnik', 'Roštilj', 'Ćevapi u sosu od kajmaka', 'junetina, sos od kajmaka sa sirom, pecivo, sudžuk paprika', 980.00, 1, 7),
('jelovnik', 'Roštilj', 'Kobasice', 'kobasice, pekarski krompir, salata, pecivo, kečap, senf', 640.00, 1, 8);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Fingerfood', 'Pileći štapići', 'panirani pileći štapići, pomfrit, tartar sos', 720.00, 1, 1),
('jelovnik', 'Fingerfood', 'Skver rolnice', 'tortilja, čedar sir, parmezan, pileći file, burger sos', 720.00, 1, 2),
('jelovnik', 'Fingerfood', 'Pikant brusketi', 'zapečeno pecivo sa belim lukom i tucanom ljutom paprikom', 190.00, 1, 3);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Burgeri', 'Burger clasic', '100% junetina, čedar sir, burger sos, iceberg, paradajz, kiseli krastavci, luk, kečap, pomfrit', 640.00, 1, 1),
('jelovnik', 'Burgeri', 'Burger bacon', '100% junetina, slanina, čedar sir, burger sos, iceberg, paradajz, kiseli krastavci, luk, kečap, pomfrit', 740.00, 1, 2),
('jelovnik', 'Burgeri', 'Double burger', '2x 100% junetina, 2x čedar sir, burger sos, iceberg, paradajz, kiseli krastavci, luk, kečap, pomfrit', 840.00, 1, 3),
('jelovnik', 'Burgeri', 'Burger Cheese Special', '100% junetina, čedar sir, pohovani kačkavalj, burger sos, iceberg, paradajz, kiseli krastavac, luk, pomfrit, sos', 840.00, 1, 4),
('jelovnik', 'Burgeri', 'Burger 22', 'junetina, pohovani kačkavalj, čedar sir, burger sos, iceberg, paradajz, kiseli krastavci, luk, kečap, pomfrit', 940.00, 1, 5);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Posno i salate', 'Hladna pasta', 'kukuruz, crveni pasulj, rukola, tunjevina, ljubičasti luk', 780.00, 1, 1),
('jelovnik', 'Posno i salate', 'Rižoto', 'tikvice, paprika, šargarepa, pečurke, luk', 780.00, 1, 2),
('jelovnik', 'Posno i salate', 'Vege burger', 'burger sos, iceberg, luk, paradajz, kiseli krastavac, burger od soje i začina', 780.00, 1, 3),
('jelovnik', 'Posno i salate', 'Dimljena pastrmka', 'dimljena pastrmka, domaći krompir, rukola, čeri', 1390.00, 1, 4),
('jelovnik', 'Posno i salate', 'Tuna sendvič', 'posni majonez, iceberg, paradajz, krastavac, tuna', 720.00, 1, 5),
('jelovnik', 'Posno i salate', 'Tuna tortilja', 'posni majonez, iceberg, paradajz, krastavac, tuna', 720.00, 1, 6),
('jelovnik', 'Posno i salate', 'Tuna salata', 'posni dresing, iceberg, paradajz, krastavac, tuna, susam', 720.00, 1, 7),
('jelovnik', 'Posno i salate', 'Riotuna tortilja', 'kukuruz, crveni pasulj, rukola, tunjevina, ljubičasti luk, posni majonez, pomfrit', 780.00, 1, 8),
('jelovnik', 'Posno i salate', 'Cezar salata', 'pileći file, cezar sos, iceberg, paradajz, parmezan, krutoni, slanina', 680.00, 1, 9);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Prilog', 'Domaći krompir 200g', NULL, 280.00, 1, 1),
('jelovnik', 'Prilog', 'Krompir salata 200g', NULL, 280.00, 1, 2),
('jelovnik', 'Prilog', 'Pekarski krompir 300g', NULL, 340.00, 1, 3),
('jelovnik', 'Prilog', 'Pomfrit 200g', NULL, 240.00, 1, 4),
('jelovnik', 'Prilog', 'Rukola čeri', NULL, 320.00, 1, 5),
('jelovnik', 'Prilog', 'Posni tartar', NULL, 90.00, 1, 6);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Kids menu', 'Štapići', 'panirani pileći štapići, pomfrit, tartar sos', 480.00, 1, 1),
('jelovnik', 'Kids menu', 'Cheeseburger', 'junetina, kiseli krastavci, pomfrit, burger sos', 480.00, 1, 2);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Prilozi', 'Pomfrit 200g', NULL, 240.00, 1, 1),
('jelovnik', 'Prilozi', 'Pekarski krompir 300g', NULL, 340.00, 1, 2),
('jelovnik', 'Prilozi', 'Tartar 50g', NULL, 90.00, 1, 3),
('jelovnik', 'Prilozi', 'Kajmak 50g', NULL, 180.00, 1, 4),
('jelovnik', 'Prilozi', 'Urnebes 100g', NULL, 120.00, 1, 5);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Salate', 'Kupus salata 200g', NULL, 180.00, 1, 1),
('jelovnik', 'Salate', 'Paradajz salata sa sirom 250g', NULL, 360.00, 1, 2),
('jelovnik', 'Salate', 'Krastavac salata 200g', NULL, 320.00, 1, 3),
('jelovnik', 'Salate', 'Šopska salata 250g', NULL, 380.00, 1, 4);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Slane palačinke', 'Palačinka šunka', 'šunka, pavlaka, kačkavalj', 480.00, 1, 1),
('jelovnik', 'Slane palačinke', 'Palačinka pileća', 'piletina, susam pavlaka, kačkavalj', 520.00, 1, 2);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Slatke palačinke', 'Nutella', NULL, 360.00, 1, 1),
('jelovnik', 'Slatke palačinke', 'Nutella, Plazma', NULL, 420.00, 1, 2),
('jelovnik', 'Slatke palačinke', 'Nutella, Plazma, Banana', NULL, 480.00, 1, 3),
('jelovnik', 'Slatke palačinke', 'Nutella, Plazma, Višnja', NULL, 480.00, 1, 4),
('jelovnik', 'Slatke palačinke', 'Nutella, Plazma, Malina', NULL, 510.00, 1, 5),
('jelovnik', 'Slatke palačinke', 'Krem/Džem', NULL, 260.00, 1, 6),
('jelovnik', 'Slatke palačinke', 'Krem, Plazma', NULL, 320.00, 1, 7),
('jelovnik', 'Slatke palačinke', 'Krem, Plazma, Banana', NULL, 380.00, 1, 8),
('jelovnik', 'Slatke palačinke', 'Krem, Plazma, Višnja', NULL, 380.00, 1, 9),
('jelovnik', 'Slatke palačinke', 'Krem, Plazma, Malina', NULL, 410.00, 1, 10),
('jelovnik', 'Slatke palačinke', 'Mak, Plazma, Šumsko voće', NULL, 580.00, 1, 11);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('jelovnik', 'Predlog UK22', 'Palačinka FERTIK', 'krem, plazma, malina, kokos', 580.00, 1, 1),
('jelovnik', 'Predlog UK22', 'KINDERBUENO', 'čoko palačinka, nutella, plazma, kinderbueno čokoladica', 680.00, 1, 2),
('jelovnik', 'Predlog UK22', 'SLATKA DVADESETDVOJKA', 'nutella, plazma, topli sos višnja', 580.00, 1, 3);

-- ============================================================
-- FASTFOOD
-- ============================================================

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('fastfood', 'Fast food', 'Pljeskavica 250g', '250g junetina', 420.00, 1, 1),
('fastfood', 'Fast food', 'Gurmanska pljeskavica 250g', '200g junetina, 25g slanina, 25g kačkavalj, tucana paprika', 460.00, 1, 2),
('fastfood', 'Fast food', 'Pileći file 200g', NULL, 420.00, 1, 3),
('fastfood', 'Fast food', 'Kobasice 200g', '200g kobasice od junetine i svinjskog mesa', 420.00, 1, 4),
('fastfood', 'Fast food', 'Sendvič pohovana piletina 250g', '250g pohovana piletina, burger sos, iceberg, kiseli krastavci', 460.00, 1, 5),
('fastfood', 'Fast food', 'Index sendvič', '100g pizza šunka, 100g kačkavalj, 70g šampinjoni, pavlaka, majonez, kečap, paradajz, krastavac', 420.00, 1, 6);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('fastfood', 'Dodaci', 'Pomfrit 200g', NULL, 240.00, 1, 1),
('fastfood', 'Dodaci', 'Začinjeni krompir 300g', NULL, 340.00, 1, 2);

-- ============================================================
-- PICE
-- ============================================================

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Topli napici', 'Espresso', NULL, 170.00, 1, 1),
('pice', 'Topli napici', 'Espresso duppio', NULL, 240.00, 1, 2),
('pice', 'Topli napici', 'Espresso sa mlekom', NULL, 190.00, 1, 3),
('pice', 'Topli napici', 'Cappuccino', NULL, 230.00, 1, 4),
('pice', 'Topli napici', 'Cappuccino soja', NULL, 270.00, 1, 5),
('pice', 'Topli napici', 'Nes kafa', NULL, 240.00, 1, 6),
('pice', 'Topli napici', 'Nes kafa soja', NULL, 280.00, 1, 7),
('pice', 'Topli napici', 'Domaća kafa', NULL, 180.00, 1, 8),
('pice', 'Topli napici', 'Čaj', NULL, 240.00, 1, 9),
('pice', 'Topli napici', 'Topla čokolada', NULL, 310.00, 1, 10),
('pice', 'Topli napici', 'Med kom.', NULL, 40.00, 1, 11),
('pice', 'Topli napici', 'Čaša za poneti', NULL, 20.00, 1, 12);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Negazirani sokovi', 'Next 0.2', NULL, 240.00, 1, 1),
('pice', 'Negazirani sokovi', 'Cedevita 0.25', NULL, 210.00, 1, 2),
('pice', 'Negazirani sokovi', 'Ceđena pomorandža 0.25', NULL, 420.00, 1, 3),
('pice', 'Negazirani sokovi', 'Limunada 0.25', NULL, 220.00, 1, 4),
('pice', 'Negazirani sokovi', 'Limunada sa ukusom 0.5', NULL, 320.00, 1, 5),
('pice', 'Negazirani sokovi', 'Fuzetea 0.25', NULL, 240.00, 1, 6),
('pice', 'Negazirani sokovi', 'Homemade Icetea 0.5', NULL, 520.00, 1, 7);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Vode', 'Rosa 0.3', NULL, 160.00, 1, 1),
('pice', 'Vode', 'Rosa 0.7', NULL, 280.00, 1, 2),
('pice', 'Vode', 'Romerquelle 0.33', NULL, 220.00, 1, 3);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Gazirani sokovi', 'CocaCola, Fanta, Sprite 0.25', NULL, 240.00, 1, 1),
('pice', 'Gazirani sokovi', 'Schweppes 0.25', NULL, 260.00, 1, 2),
('pice', 'Gazirani sokovi', 'Orangina 0.25', NULL, 240.00, 1, 3),
('pice', 'Gazirani sokovi', 'Cockta 0.275', NULL, 240.00, 1, 4),
('pice', 'Gazirani sokovi', 'Ivi 0.33', NULL, 240.00, 1, 5);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Energetski napici', 'RedBull 0.25', NULL, 360.00, 1, 1),
('pice', 'Energetski napici', 'Ultra Energy 0.25', NULL, 260.00, 1, 2);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Žestoka pića', 'Tequila 0.03', NULL, 260.00, 1, 1),
('pice', 'Žestoka pića', 'Smirnoff 0.03', NULL, 280.00, 1, 2),
('pice', 'Žestoka pića', 'Vinjak 0.05', NULL, 240.00, 1, 3),
('pice', 'Žestoka pića', 'Vinjak petica 0.03', NULL, 310.00, 1, 4),
('pice', 'Žestoka pića', 'Gin Beefeater 0.05', NULL, 290.00, 1, 5),
('pice', 'Žestoka pića', 'Gin Bombay 0.03', NULL, 330.00, 1, 6),
('pice', 'Žestoka pića', 'Baileys 0.05', NULL, 290.00, 1, 7),
('pice', 'Žestoka pića', 'Gorki list 0.05', NULL, 280.00, 1, 8),
('pice', 'Žestoka pića', 'Jegermeister 0.05', NULL, 290.00, 1, 9);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Viski', 'Jameson 0.03', NULL, 340.00, 1, 1),
('pice', 'Viski', 'Red Label 0.03', NULL, 310.00, 1, 2),
('pice', 'Viski', 'Jack Daniels 0.03', NULL, 360.00, 1, 3),
('pice', 'Viski', 'Chivas Regal 0.03', NULL, 430.00, 1, 4);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Rakija', 'Kovilj kajsija 0.03', NULL, 310.00, 1, 1),
('pice', 'Rakija', 'Kovilj dunja 0.03', NULL, 340.00, 1, 2),
('pice', 'Rakija', 'Kovilj šljiva 0.03', NULL, 340.00, 1, 3),
('pice', 'Rakija', 'Kovilj viljamovka 0.03', NULL, 340.00, 1, 4),
('pice', 'Rakija', 'Medovača meduška 0.03', NULL, 340.00, 1, 5);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Vino', 'Plantaže Belo 0.187', NULL, 410.00, 1, 1),
('pice', 'Vino', 'Plantaže Crno 0.187', NULL, 410.00, 1, 2),
('pice', 'Vino', 'Plantaže Rose 0.187', NULL, 410.00, 1, 3),
('pice', 'Vino', 'Vino La Sisteria Belo 0.7', NULL, 1740.00, 1, 4),
('pice', 'Vino', 'Vino La Sisteria Crno 0.7', NULL, 1740.00, 1, 5),
('pice', 'Vino', 'Vino La Sisteria Rose 0.7', NULL, 1740.00, 1, 6),
('pice', 'Vino', 'Somersby 0.33', NULL, 310.00, 1, 7);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Pivo', 'Tuborg 0.33', NULL, 270.00, 1, 1),
('pice', 'Pivo', 'Blanc 0.33', NULL, 290.00, 1, 2),
('pice', 'Pivo', 'Heineken 0.25', NULL, 310.00, 1, 3),
('pice', 'Pivo', 'Točeno tuborg 0.33', NULL, 240.00, 1, 4),
('pice', 'Pivo', 'Točeno tuborg 0.5', NULL, 290.00, 1, 5),
('pice', 'Pivo', 'Točeno blanc 0.33', NULL, 250.00, 1, 6),
('pice', 'Pivo', 'Točeno blanc 0.5', NULL, 310.00, 1, 7);

INSERT INTO menu_items (section, category, name, description, price, available, sort_order) VALUES
('pice', 'Kokteli', 'Aperol Spritz 0.5', NULL, 580.00, 1, 1),
('pice', 'Kokteli', 'Cuba Libre 0.5', NULL, 680.00, 1, 2),
('pice', 'Kokteli', 'Tequila Sunrise 0.5', NULL, 680.00, 1, 3),
('pice', 'Kokteli', 'Blue Lagoon 0.5', NULL, 680.00, 1, 4),
('pice', 'Kokteli', 'Blue Night 0.5', NULL, 680.00, 1, 5),
('pice', 'Kokteli', 'Maitai 0.5', NULL, 680.00, 1, 6),
('pice', 'Kokteli', 'Margarita 0.2', NULL, 580.00, 1, 7),
('pice', 'Kokteli', 'Sex on the beach 0.5', NULL, 680.00, 1, 8),
('pice', 'Kokteli', 'Sex machine 0.5', NULL, 680.00, 1, 9),
('pice', 'Kokteli', 'Bahama 22 0.5', NULL, 720.00, 1, 10),
('pice', 'Kokteli', 'Aloha 22 0.5', NULL, 720.00, 1, 11),
('pice', 'Kokteli', 'Black Sabbath 0.5', NULL, 720.00, 1, 12),
('pice', 'Kokteli', 'Long Island 0.5', NULL, 780.00, 1, 13),
('pice', 'Kokteli', 'Devil Icetea 0.5', NULL, 780.00, 1, 14),
('pice', 'Kokteli', 'Red Devils 0.5', NULL, 780.00, 1, 15);
