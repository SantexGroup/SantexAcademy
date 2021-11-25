const dogService = require('../services/dog.services');
const userModel = require("../models").user;

async function altaDog(req, res, next) {
  try {
    const { nombreDog, idRaza, sexo, fechaNacimiento, id_User } = req.body;    
    const dog = await dogService.altaDogService(nombreDog, idRaza, sexo, fechaNacimiento, id_User);
    
   
    if (dog) {
      res
        
        .json({ success: true, message: 'El perro  ha sido registrado correctamente' });
    }
  } catch (error) {
    next(error);
  }
}

async function dogsList(req, res, next){
  try{
    const { page } = req.params || 1;
    const list = await dogService.getAll(page);
    //console.log(list);
    res.json(list);

  }
  catch(error){
    next(error);
  }
}

async function listDogs(req, res, next){
  try{
    
    const list = await dogService.listDogsServices();
    const fechaNac = list.fechaNacimiento;
    const nombDoc = list.nombreDog;
    const raza = list.raza;
    const sexo = list.sexo;
    const nombreUser = list.user.username;

    const listDogs = {fechaNac, nombDoc, raza,sexo, nombreUser}
    console.log(listDogs)
    res.json(listDogs);

  }
  catch(error){
    next(error);
  }
}

module.exports = {
  altaDog,
  dogsList,
  listDogs
};
