const dogService = require('../services/dog.services');


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

module.exports = {
  altaDog,
  dogsList  
};
