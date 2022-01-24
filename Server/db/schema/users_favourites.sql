DROP TABLE IF EXISTS users_favourites CASCADE;

CREATE TABLE users_favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id VARCHAR(255) NOT NULL,
  shelters_id VARCHAR(255)NOT NULL,
  pets_id VARCHAR(255)  NOT NULL
);
