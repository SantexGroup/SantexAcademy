const BaseException = require('./base.exceptions');

class InvalidPasswordException extends BaseException {
  constructor() {
    super('Usuario y/o contraseña inválidos');
    this.name = this.constructor.name;
    this.status = 401;
  }
}

module.exports = InvalidPasswordException;
