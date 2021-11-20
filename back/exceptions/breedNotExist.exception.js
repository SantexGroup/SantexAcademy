const BaseException = require('./base.exceptions');

class BreedExistException extends BaseException {
  constructor() {
    super('No existe esa raza');
    this.raza = this.constructor.raza;
    this.status = 404;
  }
}

module.exports = BreedExistException;
