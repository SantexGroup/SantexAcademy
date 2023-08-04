/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clases', [
      {
        title: 'Introduccion',
        description: 'Automatic context help is disabled. Use the toolbar to manually get help for the current caret position or to toggle automatic help.',
        date: new Date('2023-9-10'),
        days: 'Jueves',
        hour: 18,
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'tema 1',
        description: 'Automatic context help is disabled. Use the toolbar to manually get help for the current caret position or to toggle automatic help.',
        date: new Date('2023-9-17'),
        days: 'Jueves',
        hour: 18,
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Introduccion',
        description: 'Automatic context help is disabled. Use the toolbar to manually get help for the current caret position or to toggle automatic help.',
        date: new Date('2023-9-10'),
        days: 'Jueves',
        hour: 18,
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'tema 1',
        description: 'Automatic context help is disabled. Use the toolbar to manually get help for the current caret position or to toggle automatic help.',
        date: new Date('2023-9-17'),
        days: 'Jueves',
        hour: 18,
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clases', null, {});
  },
};
