module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('coordinador', [
      {
        id_coordinador: 1,
        email: 'coordinador1@example.com',
        fullname: 'Coordinador Uno',
        id_rol: 3,
        nombre_rol: 'Coordinador',
        ong_cuit: '123456789',
        ong_nombre: 'ONG Uno',
        password: 'password1',
        telefono: '123456789'
      },
      {
        id_coordinador: 2,
        email: 'coordinador2@example.com',
        fullname: 'Coordinador Dos',
        id_rol: 3,
        nombre_rol: 'Coordinador',
        ong_cuit: '987654321',
        ong_nombre: 'ONG Dos',
        password: 'password2',
        telefono: '987654321'
      },
      {
        id_coordinador: 3,
        email: 'coordinador3@example.com',
        fullname: 'Coordinador Tres',
        id_rol: 3,
        nombre_rol: 'Coordinador',
        ong_cuit: '2468101214',
        ong_nombre: 'ONG Tres',
        password: 'password3',
        telefono: '2468101214'
      },
      {
        id_coordinador: 4,
        email: 'coordinador4@example.com',
        fullname: 'Coordinador Cuatro',
        id_rol: 3,
        nombre_rol: 'Coordinador',
        ong_cuit: '1357911131',
        ong_nombre: 'ONG Cuatro',
        password: 'password4',
        telefono: '1357911131'
      },
      {
        id_coordinador: 5,
        email: 'coordinador5@example.com',
        fullname: 'Coordinador Cinco',
        id_rol: 3,
        nombre_rol: 'Coordinador',
        ong_cuit: '1212121212',
        ong_nombre: 'ONG Cinco',
        password: 'password5',
        telefono: '1212121212'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('coordinador', null, {});
  }
};
