
CREATE SCHEMA IF NOT EXISTS `volunTimeDB` 

-- -----------------------------------------------------
-- Table `volunTimeDB`.`cestaRecompensas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`cestaRecompensas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)




-- -----------------------------------------------------
-- Table `volunTimeDB`.`catalogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`catalogo` (
  `id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))



-- -----------------------------------------------------
-- Table `volunTimeDB`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `costoEnHoras` VARCHAR(50) NOT NULL,
  `catalogoId` INT NOT NULL,
  PRIMARY KEY (`id`, `catalogoId`),
  INDEX `fk_producto_catalogo1_idx` (`catalogoId` ASC) VISIBLE,
  CONSTRAINT `fk_producto_catalogo1`
    FOREIGN KEY (`catalogoId`)
    REFERENCES `volunTimeDB`.`catalogo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)


-- -----------------------------------------------------
-- Table `volunTimeDB`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))



-- -----------------------------------------------------
-- Table `volunTimeDB`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(50) NULL,
  `telefono` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `reputation` INT NOT NULL,
  `recompensasAcumuladas` INT NULL DEFAULT NULL,
  `rolesId` INT NOT NULL,
  `cestaRecompensasId` INT NOT NULL,
  PRIMARY KEY (`id`, `rolesId`, `cestaRecompensasId`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_usuario_roles1_idx` (`rolesId` ASC) VISIBLE,
  INDEX `fk_usuario_cestaRecompensas1_idx` (`cestaRecompensasId` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_roles1`
    FOREIGN KEY (`rolesId`)
    REFERENCES `volunTimeDB`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_cestaRecompensas1`
    FOREIGN KEY (`cestaRecompensasId`)
    REFERENCES `volunTimeDB`.`cestaRecompensas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)



-- -----------------------------------------------------
-- Table `volunTimeDB`.`organizacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`organizacion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(25) NULL,
  `cuit` VARCHAR(11) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `telefono_UNIQUE` (`telefono` ASC) VISIBLE,
  UNIQUE INDEX `cuit_UNIQUE` (`cuit` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `volunTimeDB`.`voluntariado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`voluntariado` (
  `idVoluntariado` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NOT NULL,
  `recompensa` INT NOT NULL,
  `organizacionId` INT NOT NULL,
  PRIMARY KEY (`idVoluntariado`, `organizacionId`),
  UNIQUE INDEX `id_voluntariado_UNIQUE` (`idVoluntariado` ASC) VISIBLE,
  INDEX `fk_voluntariado_organizacion1_idx` (`organizacionId` ASC) VISIBLE,
  CONSTRAINT `fk_voluntariado_organizacion1`
    FOREIGN KEY (`organizacionId`)
    REFERENCES `volunTimeDB`.`organizacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)


-- -----------------------------------------------------
-- Table `volunTimeDB`.`usuarioEnVoluntariado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`usuarioEnVoluntariado` (
  `usuarioId` INT NOT NULL,
  `voluntariadoId` INT NOT NULL,
  PRIMARY KEY (`usuarioId`, `voluntariadoId`),
  INDEX `fk_usuario_has_voluntariado_voluntariado1_idx` (`voluntariadoId` ASC) VISIBLE,
  INDEX `fk_usuario_has_voluntariado_usuario1_idx` (`usuarioId` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_voluntariado_usuario1`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `volunTimeDB`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_voluntariado_voluntariado1`
    FOREIGN KEY (`voluntariadoId`)
    REFERENCES `volunTimeDB`.`voluntariado` (`idVoluntariado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)



-- -----------------------------------------------------
-- Table `volunTimeDB`.`productoEnCestaRecompensas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `volunTimeDB`.`productoEnCestaRecompensas` (
  `productoId` INT NOT NULL,
  `cestaRecompensasId` INT NOT NULL,
  PRIMARY KEY (`productoId`, `cestaRecompensasId`),
  INDEX `fk_producto_has_cestaRecompensas_cestaRecompensas1_idx` (`cestaRecompensasId` ASC) VISIBLE,
  INDEX `fk_producto_has_cestaRecompensas_producto1_idx` (`productoId` ASC) VISIBLE,
  CONSTRAINT `fk_producto_has_cestaRecompensas_producto1`
    FOREIGN KEY (`productoId`)
    REFERENCES `volunTimeDB`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_has_cestaRecompensas_cestaRecompensas1`
    FOREIGN KEY (`cestaRecompensasId`)
    REFERENCES `volunTimeDB`.`cestaRecompensas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)




