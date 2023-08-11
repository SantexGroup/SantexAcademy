const { Products } = require('../models');
// const jwt = require('jsonwebtoken')

/* async function login(name, password) {
  const user = await User.findOne({
    where: {
      name: name,
      password: password
    }
  })

  if (!user) {
    throw new NotAuthorizedException("Email y/o clave incorrectos")
  }

  const token = jwt.sign({
    id: user.id,
    email: user.email,
    name: user.name
  }, 'admin')

  return {
    accessToken: token
  }
} */

async function products() {
  const productos = await Products.findAll();
  console.log('Productos', productos);

  return productos;
}

module.exports = { products };
