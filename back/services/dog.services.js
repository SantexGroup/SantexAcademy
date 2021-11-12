const dogModel  = require("../models").dogs;
const userModel = require("../models").user;
const DogExistException = require('../exceptions/dogExist.exceptions');

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

const limite = 10;

async function getAll(page){
  let pagina = (page.page - 1) * limite;
  const result = await dogModel.findAll({
    include: [{
      model: userModel,
      attributes:['username'],
      required: true
     }],
    attributes: [ 'id', 'nombreDog', 'raza', 'sexo', 'fechaNacimiento' ],
    limit: limite,
    offset: pagina,
  });

  return result;
}

module.exports = {
    altaDogService,
    getAll
};