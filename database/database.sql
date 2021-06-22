CREATE DATABASE firstapi;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT UNIQUE
);


INSERT INTO users(name,email)
        VALUES ('joe','joe@ibm.com'),('ryan','ryan@gmail.com');