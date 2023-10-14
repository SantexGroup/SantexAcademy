const BaseException = require('./base.exceptions');

/**
 * Exception personalizada para recursos no encontrados.
 *
 * La clase extiende de la clase BaseException.
 * Se utiliza para indicar que el recurso solicitado no existe.
 */
class NotFoundException extends BaseException {
  constructor(str = 'Not Found') {
    super(str);
    this.status = 404;
  }
}

module.exports = NotFoundException;
