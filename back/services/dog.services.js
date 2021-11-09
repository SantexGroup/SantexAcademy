const dogModel  = require("../models").dogs;
const DogExistException = require('../exceptions/dogExist.exceptions');

async function getOne(data) {
  return dogModel.findOne({ where: data, attributes: dogData });
}

async function existeNombreDog( id_User, nombreDog  ) {
   
  let busqueda =  { id_User: id_User};
  if (!!nombreDog) {
      busqueda.nombreDog = nombreDog;
  }
  let tmp = await dogModel.findOne({
    where: busqueda,
  }); 
 
  return tmp;
  

}

async function altaDogService( nombreDog, raza, sexo, fechaNacimiento, id_User ) {
  
   const existeDog = await existeNombreDog(id_User, nombreDog);
    if (existeDog) {
       throw new DogExistException();
    }
    
    const newDog = await dogModel.create({
        nombreDog:nombreDog,
        raza:raza,
        sexo:sexo,
        fechaNacimiento:fechaNacimiento,
        id_User:id_User
    });
    
    return newDog;
}



module.exports = {
    altaDogService,
    
};
