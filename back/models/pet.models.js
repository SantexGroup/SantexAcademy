const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    'pet',
    {
      id: {
        type: DataTypes.INTEGER(16),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: false,
      },
      birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(2),
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      breedId: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      age: {
        type: DataTypes.VIRTUAL,
        get() {
          let today = moment(new Date());
          let birth = moment(this.getDataValue('birth_date'));
          // La edad se expresa en meses, tranformar en anio + meses desde el frontend
          let age = today.diff(birth, 'months');
          return age;
        },
      },
    },
    {
      timestamps: true,
      tableName: 'pets',
    }
  );

  pet.associate = (models) => {
    pet.belongsTo(models.user, { foreignKey: 'userId', targetKey: 'id' });
    pet.belongsTo(models.breed, { foreignKey: 'breedId', targetKey: 'id' });
  };

  return pet;
};