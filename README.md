git init
npm init -y
npx tsc --init
USE animes;

CREATE TABLE studios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

CREATE TABLE directors (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

CREATE TABLE animes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    genre varchar(100),
    id_studio INT,
    FOREIGN KEY (id_studio) REFERENCES studios(id),
    id_director INT,
    FOREIGN KEY (id_director) REFERENCES directors(id)
);



DROP TABLE animes;
DROP TABLE directors;
DROP TABLE studios;

https://www.w3schools.com/tags/ref_httpmessages.asp
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
