const BaseException = require('./base.exceptions');

class AuthenticationException extends BaseException {
  constructor(str = 'User not authenticated') {
    super(str);
    this.status = 401;
  }
}

module.exports = AuthenticationException;
