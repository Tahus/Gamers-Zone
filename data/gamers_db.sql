-- On démarre avec une transaction pour s'assurer de la cohérence global de la BDD
BEGIN;

-- On commence par supprimer les tables si elles existent
DROP TABLE IF EXISTS  articles, "users", categories;

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
  "resume" TEXT NOT NULL,
  "url_image" TEXT NOT NULL,
  "media_type" TEXT NOT NULL,
  "categories_id" INTEGER NOT NULL REFERENCES "categories"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3ème table

CREATE TABLE "users" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_name" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "birth_date" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- SEEDING


COMMIT;

