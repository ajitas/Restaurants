CREATE DATABASE restaurants_db;

USE restaurants_db;

CREATE TABLE restaurants(
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    visited BOOLEAN DEFAULT false,
    liked BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);


