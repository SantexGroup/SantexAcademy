const BaseException = require('./base.exceptions');

class UserExistException extends BaseException {
  constructor() {
    super('El nombre de usuario ya existe.');
    this.name = this.constructor.name;
    this.status = 403;

  }
}

module.exports = UserExistException;


