USE Incubadora_NOC_Cursos;

insert into tiposdeusuarios(nombre) values ('Administrativo');
insert into tiposdeusuarios(nombre) values ('Alumno');
insert into tiposdeusuarios(nombre) values ('Docente');

insert into TiposDeDocumento(nombre, abreviatura) values ('D.N.I.', 'DNI');
insert into TiposDeDocumento(nombre, abreviatura) values ('PASAPORTE', 'PAS');
insert into TiposDeDocumento(nombre, abreviatura) values ('LIBRETA DE ENROLAMIENTO', 'LE');
insert into TiposDeDocumento(nombre, abreviatura) values ('LIBRETA CIVICA', 'LC');
insert into TiposDeDocumento(nombre, abreviatura) values ('CEDULA', 'CI');

INSERT INTO `incubadora_noc_cursos`.`TipoDeUsuarios` (`id`, `nombre`, `descripcion`, `createdAt`, `updatedAt`)
VALUES ('1', 'Administrador', 'Administrador', NOW(), NOW());

INSERT INTO `incubadora_noc_cursos`.`TipoDeUsuarios` (`id`, `nombre`, `descripcion`, `createdAt`, `updatedAt`)
VALUES ('2', 'Alumno', 'Alumno', NOW(), NOW());

INSERT INTO `incubadora_noc_cursos`.`TipoDeUsuarios` (`id`, `nombre`, `descripcion`, `createdAt`, `updatedAt`)
VALUES ('3', 'Docente', 'Docente', NOW(), NOW());

select * from tiposdeusuarios;
select * from TiposDeDocumento;