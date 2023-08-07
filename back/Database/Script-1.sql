

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;

-- -----------------------------------------------------
-- Table `mydb`.`carritoRecompensa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carritoRecompensa` (
  `id_carrito` INT NOT NULL AUTO_INCREMENT,
  `name` letCHAR(50) NOT NULL,
  PRIMARY KEY (`id_carrito`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.usuario (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `username` letCHAR(16) NOT NULL,
  `email` letCHAR(255) NOT NULL,
  `password` letCHAR(32) NOT NULL,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `reputation` INT NOT NULL,
  `carritoRecompensa_id_carrito` INT NOT NULL,
  `id_rol` INT,
  PRIMARY KEY (`idUsuario`, `carritoRecompensa_id_carrito`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `id_rol_UNIQUE` (`id_rol` ASC) VISIBLE,
  INDEX `fk_usuario_carritoRecompensa1_idx` (`carritoRecompensa_id_carrito` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_carritoRecompensa1`
    FOREIGN KEY (`carritoRecompensa_id_carrito`)
    REFERENCES mydb.`carritoRecompensa` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_roles`
    FOREIGN KEY (`id_rol`)
    REFERENCES mydb.roles (`id_rol`)
);

-- Agregar columna recompensa a tabla usuarios
ALTER TABLE mydb.usuario
ADD COLUMN `recompensas_acumuladas` INT;



-- -----------------------------------------------------
-- Table `mydb`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`roles` (
    `id_rol` INT AUTO_INCREMENT PRIMARY KEY,
    `nombre_rol` VARCHAR(255) NOT NULL
);


-- -----------------------------------------------------
-- Table `mydb`.`visitante`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `mydb`.`visitante` (
    `id_visitante` INT AUTO_INCREMENT PRIMARY KEY,
    `nombre_rol` VARCHAR(255) NOT NULL,
    `id_rol` INT,
    FOREIGN KEY (`id_rol`) REFERENCES mydb.roles(`id_rol`)
);


-- -----------------------------------------------------
-- Table `mydb`.`voluntario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`voluntario` (
    `id_voluntario` INT AUTO_INCREMENT PRIMARY KEY,
    `fullname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(255) NOT NULL,
    `password` VARCHAR(32) NOT NULL,
    `nombre_rol` VARCHAR(255) NOT NULL,
    `id_rol` INT,
    FOREIGN KEY (`id_rol`) REFERENCES mydb.roles(`id_rol`)
);



-- -----------------------------------------------------
-- Table `mydb`.`coordinador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`coordinador` (
    `id_coordinador` INT AUTO_INCREMENT PRIMARY KEY,
    `fullname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(255) NOT NULL,
    `ong_nombre` VARCHAR(255) NOT NULL,
    `ong_cuit` INT NOT NULL,
    `password` VARCHAR(32) NOT NULL,
    `nombre_rol` VARCHAR(255) NOT NULL,
    `id_rol` INT,
    FOREIGN KEY (`id_rol`) REFERENCES mydb.roles(`id_rol`)
);


-- -----------------------------------------------------
-- Table `mydb`.`administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administrador` (
    `id_administrador` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `nombre_rol` VARCHAR(255) NOT NULL,
    `id_rol` INT,
    FOREIGN KEY (`id_rol`) REFERENCES mydb.roles(`id_rol`)
);


-- -----------------------------------------------------
-- Table `mydb`.`voluntariado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`voluntariado` (
  `id_voluntariado` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NOT NULL,
  `recompensa` INT NOT NULL,
  PRIMARY KEY (`id_voluntariado`),
  UNIQUE INDEX `id_voluntariado_UNIQUE` (`id_voluntariado` ASC) VISIBLE);
 
 


-- -----------------------------------------------------
-- Table `mydb`.`usuarioVoluntariado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarioVoluntariado` (
  `usuario_idUsuario` INT NOT NULL,
  `voluntariadoIdVoluntariado` INT NOT NULL,
  PRIMARY KEY (`usuario_idUsuario`, `voluntariadoIdVoluntariado`),
  INDEX `fk_usuarioHasVoluntariadoVoluntariado1_idx` (`voluntariadoIdVoluntariado` ASC) VISIBLE,
  INDEX `fk_usuario_has_voluntariado_usuario_idx` (`usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_voluntariado_usuario`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `mydb`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_voluntariado_voluntariado1`
    FOREIGN KEY (`voluntariadoIdVoluntariado`)
    REFERENCES `mydb`.`voluntariado` (`id_voluntariado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`catalogo_Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`catalogo_Productos` (
  `id_catalogo` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_catalogo`));


-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `costo_en_horas` VARCHAR(50) NOT NULL,
  `catalogo_Productos_id_catalogo` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `catalogo_Productos_id_catalogo`),
  INDEX `fk_producto_catalogoProductos1_idx` (`catalogo_Productos_id_catalogo` ASC) VISIBLE,
  CONSTRAINT `fk_producto_catalogoProductos1`
    FOREIGN KEY (`catalogo_Productos_id_catalogo`)
    REFERENCES `mydb`.`catalogo_Productos` (`id_catalogo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`producto_has_carritoRecompensa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`producto_has_carritoRecompensa` (
  `producto_id_producto` INT NOT NULL,
  `producto_catalogoProductos_id_catalogo` INT NOT NULL,
  `carritoRecompensa_id_carrito` INT NOT NULL,
  PRIMARY KEY (`producto_id_producto`, `producto_catalogoProductos_id_catalogo`, `carritoRecompensa_id_carrito`),
  INDEX `fk_productoHasCarritoRecompensa_carritoRecompensa1_idx` (`carritoRecompensa_id_carrito` ASC) VISIBLE,
  INDEX `fk_productoHasCarritoRecompensa_producto1_idx` (`producto_id_producto` ASC, `producto_catalogoProductos_id_catalogo` ASC) VISIBLE,
  CONSTRAINT `fk_productoHasCarritoRecompensa_producto1`
    FOREIGN KEY (`producto_id_producto` , `producto_catalogoProductos_id_catalogo`)
    REFERENCES `mydb`.`producto` (`id_producto` , `catalogo_Productos_id_catalogo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productoHasCarritoRecompensa_carritoRecompensa1`
    FOREIGN KEY (`carritoRecompensa_id_carrito`)
    REFERENCES `mydb`.`carritoRecompensa` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



