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



module.exports = {
  altaDog,
  
};
