const { Router } = require('express');
const { postUser } = require('../providers/User');

const user = Router();

user.post('/register', postUser);

module.exports = user;
