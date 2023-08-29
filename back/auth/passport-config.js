const passportJwt = require('passport-jwt');
const { DataTypes } = require('sequelize');
const volunteerModel = require('../models/volunteer-model');
const { sequelize } = require('../models');

const ExctractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const coordinatorModel = require('../models/coordinator-model');

const administratorModel = require('../models/administrator-model');

const Coordinator = coordinatorModel(sequelize, DataTypes);
const Volunteer = volunteerModel(sequelize, DataTypes);
const Administrator = administratorModel(sequelize, DataTypes);

const PassportStrategy = new StrategyJwt({
  jwtFromRequest: ExctractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
}, async (jwtPayload, next) => {
  if (jwtPayload.tipoUsuario === 'voluntario') {
    const voluntario = await Volunteer.findByPk(jwtPayload.id);
    if (voluntario) {
      const info = {
        tipo: 'voluntario',
      };

      next(false, voluntario, info);
    }
  } else if (jwtPayload.tipoUsuario === 'organizacion') {
    const organizacion = await Coordinator.findByPk(jwtPayload.id);

    if (organizacion) {
      const info = {
        tipo: 'organizacion',
      };
      next(false, organizacion, info);
    }
  } else if (jwtPayload.tipoUsuario === 'admin') {
    const admin = await Administrator.findByPk(jwtPayload.id);

    if (admin) {
      const info = {
        tipo: 'admin',
      };
      next(false, admin, info);
    }
  } else {
    next(true, null, null);
  }
});

module.exports = PassportStrategy;
