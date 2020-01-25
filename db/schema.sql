CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
   id INT NOT NULL AUTO_INCREMENT,
   text VARCHAR(255) NUT NULL,
   eaten BOOLEAN DEFAULT false,
   PRIMARY KEY (id)
)