CREATE DATABASE club_de_horas;
USE club_de_horas;

CREATE TABLE administrators (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);


CREATE TABLE volunteers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  address VARCHAR(200) NOT NULL,
  points INT,
  phone VARCHAR(20) NOT NULL
);

CREATE TABLE coordinators (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  address VARCHAR(200) NOT NULL,
  phone VARCHAR(20) NOT NULL
);

CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(500) NOT NULL,
  dificulty VARCHAR(100) NOT NULL
);

CREATE TABLE premios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(500) NOT NULL,
  costo INT NOT NULL,
  cantidad INT NOT NULL
);

CREATE TABLE tareas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(500) NOT NULL,
  id_coordinator INT,
  points INT,
  date DATE NOT NULL,
  place VARCHAR(300) NOT NULL,
  id_category INT,
  cant_participantes INT DEFAULT 0 NOT NULL,
  FOREIGN KEY (id_category) REFERENCES category(id),
  FOREIGN KEY (id_coordinator) REFERENCES coordinators(id)
);

CREATE TABLE tareas_mid (
  id_tarea INT,
  id_volunteer INT,
  asistencia BOOLEAN,
  FOREIGN KEY (id_tarea) REFERENCES tareas(id),
  FOREIGN KEY (id_volunteer) REFERENCES volunteers(id)
);

CREATE TABLE premios_mid (
  id_premio INT,
  id_volunteer INT,
  date DATE,
  FOREIGN KEY (id_premio) REFERENCES premios(id),
  FOREIGN KEY (id_volunteer) REFERENCES volunteers(id)
);