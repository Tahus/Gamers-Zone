-- On démarre avec une transaction pour s'assurer de la cohérence global de la BDD
BEGIN;

-- On commence par supprimer les tables si elles existent
DROP TABLE IF EXISTS "articles_has_categories", "articles", "users", "categories";

-- 1ère table

CREATE TABLE "categories" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "url_image" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- 2ème table

CREATE TABLE "articles" (
  
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "url_image" TEXT NOT NULL,
  "media_type" TEXT NOT NULL,
  -- Notre colonne "categories_id" référencera la colonne "id" de la table "categories"
  "categories_id"  INTEGER NOT NULL REFERENCES "categories"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3ème table

CREATE TABLE "users" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "birth_date" TEXT NOT NULL,
  "url_picture" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Dernière table, celle de liaison entre nos catégories et nos articles
CREATE TABLE "articles_has_categories" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "article_id" INTEGER NOT NULL REFERENCES "articles"("id") ON DELETE CASCADE,
  "categories_id" INTEGER NOT NULL REFERENCES "categories"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- SEEDING


COMMIT;

