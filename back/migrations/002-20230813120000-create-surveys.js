module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Surveys", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      questions: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM("activo", "eliminado", "archivado"),
        defaultValue: "activo",
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Surveys");
  },
};
