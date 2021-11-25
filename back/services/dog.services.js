const dogModel = require("../models").dogs;
const userModel = require("../models").user;
const razaModel = require("../models").Razas;
const DogExistException = require("../exceptions/dogExist.exceptions");

async function existeNombreDog(id_User, nombreDog) {
  let busqueda = { id_User: id_User };
  if (!!nombreDog) {
    busqueda.nombreDog = nombreDog;
  }
  let tmp = await dogModel.findOne({
    where: busqueda,
  });

  return tmp;
}

async function altaDogService(nombreDog, idRaza, sexo, fechaNacimiento, id_User) {
  const existeDog = await existeNombreDog(id_User, nombreDog);
  if (existeDog) {
    throw new DogExistException();
  }
  const newDog = await dogModel.create({
    nombreDog: nombreDog,
    idRaza: idRaza,
    sexo: sexo,
    fechaNacimiento: fechaNacimiento,
    id_User: id_User,
  });

  return newDog;
}

function calculateAge(birthday) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const limite = 10;

async function getAll(page) {
  const response = [];
  let pagina = (page - 1) * limite;
  //const result = await dogModel.findAndCountAll({
const { count, rows } = await dogModel.findAndCountAll({

    include: [
      {
        model: userModel,
        attributes: ["username"],
        required: true,
      },
      {
        model: razaModel,
        attributes: ["raza"],
        required: true,
      },
    ],
    attributes: ["id", "nombreDog", "sexo", "fechaNacimiento"],
    limit: limite,
    offset: pagina,
  });  


  for (const pet of rows) {
    const edad = calculateAge(pet.fechaNacimiento);
    response.push({
      ...pet.dataValues,
      edad,
      userName: pet.user.username,
      user: undefined,
    });
  }
  return {count, response};
}

// async function listDogsServices() {
//   const result = await dogModel.findAll ({);   
//   include: [
//     {
//       model: userModel,
//       attributes: ["username"],
//       required: true,
//     },
//   ],
//   return result
// };

module.exports = {
  altaDogService,
  getAll,
  //listDogsServices,
};
