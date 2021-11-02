const BaseException = require('./base.exceptions');

class GenericException extends BaseException {
  /**
   * Construye un objeto de error con los argumentos proporcionados
   * @param {string} str Mensaje del error
   * @param {number} status Código de estado http
   */
  constructor(str, status) {
    super(str);
    this.name = this.constructor.name;
    this.status = status;
  }
}

module.exports = GenericException;
