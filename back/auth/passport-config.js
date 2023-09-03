require('dotenv').config();

const passportJwt = require('passport-jwt');
const { User } = require('../models');

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PassportStrategy = new StrategyJwt({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_CLAVE
}, async (jwtPayload, next) => {
    const user = await User.findByPk(jwtPayload.id);

    if(user) {
        next(false, user, null);
    } else {
        next(true, null, null);
    }
})

module.exports = PassportStrategy;