module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('pets', [
    {
      name: 'rocky',
      birth_date: new Date(),
      breed: 'pitbull',
      gender: 'macho',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'zamba',
      birth_date: new Date(),
      breed: 'caniche',
      gender: 'hembra',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('pets', null, {
      truncate: true,
      cascade: false,
    });
  },
};
