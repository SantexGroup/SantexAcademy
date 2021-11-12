module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(16),
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true
    }
  }, {
    timestamps: true,
    tableName: 'users',
  });

  user.associate = (models) => {
    user.hasMany(models.dogs, { foreignKey: 'id_User' });
  };

  return user;
};

