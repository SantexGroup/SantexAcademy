const BaseException = require('./base.exceptions');

class DogExistException extends BaseException {
  constructor() {
    super('El nombre esta registrado para este usuario.');
    this.nombreDog = this.constructor.nombreDog;
    this.status = 404;
  }
}

module.exports = DogExistException;


