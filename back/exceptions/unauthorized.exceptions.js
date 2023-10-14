const BaseException = require('./base.exceptions');

/**
 * Exception personalizada para recursos no encontrados.
 *
 * La clase extiende de la clase BaseException.
 * Se utiliza para indicar que el recurso solicitado no existe.
 */
class Unauthorized extends BaseException {
  constructor(str = 'Unauthorized') {
    super(str);
    this.status = 401;
  }
}

module.exports = Unauthorized;
