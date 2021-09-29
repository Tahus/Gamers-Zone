BEGIN;
--La table de liaison entre les articles et les catégories correspondantes.
INSERT INTO "articles_has_categories" ("articles_id", "categories_id") VALUES
(1, 1),
(1, 2),
(1, 4),
(2,1),
(2,2),
(2,5),
(3,1),
(3,2),
(3,4),
(3,5),
(4,1),
(4,6),
(4,4),
(4,2),
(5,1),
(5,2),
(5,4),
(6,1),
(6,3),
(6,4),
(7,3),
(7,4),
(8,2),
(8,3),
(8,4);

COMMIT;