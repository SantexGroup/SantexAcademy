const BaseException = require('./base.exceptions');

class UserNotFoundException extends BaseException {
  constructor() {
    super('El Usuario no existe.');
    this.name = this.constructor.name;
    this.status = 404;
  }
}

module.exports = UserNotFoundException;
