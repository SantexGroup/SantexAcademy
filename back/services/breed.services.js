const breedModel = require('../models').breed;
// const GenericException = require('../exceptions/generic.exceptions');

async function listAllBreeds() {  
  const breeds = await breedModel.findAll({
    order: [['name', 'ASC']],
    attributes: ['id', 'name', 'dangerous'],    
  });
  return breeds;
}

module.exports = {  
  listAllBreeds,
};