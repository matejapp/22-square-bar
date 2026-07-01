-- Run once on production database to add allergen support
-- G=Gluten, M=Mleko, J=Jaja, S=Soja, SU=Susam, SE=Senf, R=Riba, K=Kikiriki
ALTER TABLE menu_items
  ADD COLUMN allergens VARCHAR(50) DEFAULT NULL
  COMMENT 'Comma-separated allergen codes: G=gluten, M=mleko, J=jaja, S=soja, SU=susam, SE=senf, R=riba, K=kikiriki';
