class BaseException extends Error {
  constructor(str) {
    super(str);
    this.extendBase = true;
    this.name = this.constructor.name;
  }
}

module.exports = BaseException;
