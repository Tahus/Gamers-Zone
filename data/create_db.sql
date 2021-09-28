-- On démarre avec une transaction pour s'assurer de la cohérence global de la BDD
BEGIN;

-- On commence par supprimer les tables si elles existent
DROP TABLE IF EXISTS "articles_has_categories", "articles", "categories";

-- 1ère table
CREATE TABLE "articles" (
  
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "url_image" TEXT NOT NULL,
  -- Notre colonne "categories_id" référencera la colonne "id" de la table "categories"
  "categories_id"  INTEGER NOT NULL REFERENCES
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2ème table
CREATE TABLE "categories" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
);


-- Dernière table, celle de liaison entre nos tags et nos cartes
CREATE TABLE "articles_has_categories" (
  
  "article_id" INTEGER NOT NULL REFERENCES "articles"("id") ON DELETE CASCADE,
  "categories_id" INTEGER NOT NULL REFERENCES "categories"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- SEEDING

INSERT INTO "categories" ("id", "name", "description") VALUES 
(1, "Nouveautès De La Semaine", "Tu retrouveras ici toutes les nouvelles sorties de la semaine"),
('Amérique', 1),
('Antarctique', 2),
('Asie', 3),
('Europe', 4),
('Océanie', 5);

INSERT INTO "card" ("title", "list_id") VALUES
('Kilimandjaro', 1),
('Ras Dashan', 1),
('Mont Stanley', 1),
('Denali', 2),
('Mont Logan', 2),
('Pic d''Orizaba', 2),
('Massif Vinson', 3),
('Everest', 4),
('K2', 4),
('Elbrouz', 5),
('Dykh-Taou', 5),
('Mont Blanc', 5),
('Puncak Jaya', 6),
('Sumantri', 6),
('Nga Pulu', 6);

INSERT INTO "tag" ("name", "color") VALUES
('Done', '#F0F'),
('To Do', '#FFF'),
('Cool', '#000'),
('Hard', '#F5EFE5');

INSERT INTO "card_has_tag" ("card_id", "tag_id") VALUES
(1, 2),
(2, 2),
(12, 1),
(12, 3),
(12, 4);

COMMIT;

