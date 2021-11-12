const dogService = require('../services/dog.services');


async function altaDog(req, res, next) {
  try {
    const { nombreDog, raza, sexo, fechaNacimiento, id_User } = req.body;    
    const dog = await dogService.altaDogService(nombreDog, raza, sexo, fechaNacimiento, id_User);
    console.log(dog);
    res.json(dog);
  } catch (error) {
    next(error);
  }
}

async function dogsList(req, res, next){
  try{
    const { page } = req.params || 1;
    const list = await dogService.getAll({page});
    res.json(list);
  }
  catch(error){
    next(error);
  }
}

module.exports = {
  altaDog,
  dogsList  
};
