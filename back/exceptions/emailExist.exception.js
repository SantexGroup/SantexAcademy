const BaseException = require('./base.exceptions');

class EmailExistException extends BaseException {
  constructor() {
    super('El email ya existe.');
    this.email = this.constructor.email;
    this.status = 403;
  }
}

module.exports = EmailExistException;