//

class DescripcionContactoExceptions extends Error {
  constructor(message) {
    super(message);

    this.name = 'DescripcionContactoException';
  }
}

module.exports = DescripcionContactoExceptions;
