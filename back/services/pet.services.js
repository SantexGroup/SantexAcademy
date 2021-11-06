const petModel = require('../models').pet;
const userModel = require('../models').user;
const GenericException = require('../exceptions/generic.exceptions');
// const sequelize = require('../config/files/sequelize.config');
// const { QueryTypes } = require('sequelize');

const limite = 10;
async function listPets(userId, page) {
  const pets = await petModel.findAll({
    where: { userId },
    order: [['id', 'ASC']],
    //La edad la trae calculada desde el SQL en una columna virtual que se define en en el modelo "age"
    attributes: ['name', 'birth_date', 'age', 'breed', 'gender'],
    include: {
      model: userModel,
      attributes: ['name', 'lastname'],
    },
    limit: limite,
    offset: (page - 1) * limite,
  });

  return pets;
}

module.exports = {
  listPets,
};
