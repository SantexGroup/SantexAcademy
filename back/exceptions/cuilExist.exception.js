const BaseException = require('./base.exceptions');

class CuilExistException extends BaseException {
  constructor() {
    super('El cuil ya existe.');
    this.cuil = this.constructor.cuil;
    this.status = 403;
  }
}

module.exports = CuilExistException;