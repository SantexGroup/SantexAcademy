/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('attendance', 'courseId', {
    type: Sequelize.INTEGER,
    references: {
      model: 'courses',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('attendance', 'courseId'),
};
