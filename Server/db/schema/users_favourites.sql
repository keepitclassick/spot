DROP TABLE IF EXISTS users_favourites CASCADE;

CREATE TABLE users_favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id VARCHAR(255),
  shelters_id VARCHAR(255),
  pets_id VARCHAR(255)  
);
