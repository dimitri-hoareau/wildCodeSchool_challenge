DROP TABLE IF EXISTS "crew";

CREATE TABLE IF NOT EXISTS "crew" (
  "id" INT NOT NULL PRIMARY KEY,
  "name" VARCHAR(128)
);

INSERT INTO "crew" ("id", "name") VALUES 
(5, 'Eleftheria'),
(6, 'Gennadios'),
(175, 'Lysimachos');
