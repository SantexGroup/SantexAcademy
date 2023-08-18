DROP DATABASE IF EXISTS Incubadora_NOC_cursos;
CREATE DATABASE Incubadora_NOC_cursos CHARACTER SET utf8mb4;
USE Incubadora_NOC_Cursos;

CREATE TABLE TiposDeUsuarios (
    Id INT auto_increment not null,
    Nombre nvarchar(50) not null,
    PRIMARY KEY(Id)
);

CREATE TABLE TiposDeDocumento (
    Id INT auto_increment not null,
    Nombre nvarchar(50) not null,
    Abreviatura nvarchar(50) not null,
    PRIMARY KEY(Id)
);

CREATE TABLE Usuarios (
    Id INT auto_increment not null,
	username nvarchar(150) not null,    
    password varchar(128) not null,    
	essuperuser tinyint(1),
    usuarioverificado tinyint(1),
    apellido varchar(150) null,    
    nombre varchar(150) null,    
    idtipodeusuario int not null,
    email varchar(150) not null,
    idtipodedocumento INT NULL,   
    numerodedocumento INT NULL,
    fechadenacimiento date,
    telefono numeric null,
    ActivoActualmente bit not null default 1,
    EstadoDelRegistro char(1) NOT NULL default 'A',
	FechaAlta datetime NOT NULL,
    IdUsuarioDeAlta INT NULL,
	FechaModificacion datetime NULL,
	IdUsuarioModificacion INT NULL,
    PRIMARY KEY(Id)
);

ALTER TABLE Usuarios ADD FOREIGN KEY(IdUsuarioDeAlta) REFERENCES Usuarios(Id);
ALTER TABLE Usuarios ADD FOREIGN KEY(IdUsuarioModificacion) REFERENCES Usuarios(Id);
ALTER TABLE Usuarios ADD FOREIGN KEY(idtipodedocumento) REFERENCES TiposDeDocumento(Id);
ALTER TABLE Usuarios ADD FOREIGN KEY(idtipodeusuario) REFERENCES TiposDeUsuarios(Id);