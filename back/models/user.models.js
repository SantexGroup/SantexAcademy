module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(16),
      autoIncrement: true,      
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
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(60),
      defaultValue: null,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(60),
      defaultValue: null,
      allowNull: true
    }
  }, {
    timestamps: true,
    tableName: 'users',
  });

  return user;
};
