module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define('pet', {
    id: {
      type: DataTypes.INTEGER(16),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,

    },
    breed: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
    },
  }, {
    timestamps: true,
    tableName: 'pets',
  });

  pet.associate = (models) => {
    pet.belongsTo(models.user, { foreignKey: 'userId', targetKey: 'id' });
  };

  return pet;
};
