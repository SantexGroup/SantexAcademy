require('dotenv').config();

const {Usuario} = require("../models");
const JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt"),
    secretOrKey: process.env.SESSION_SECRET,
  };
  passport.use(
    new JwtStrategy(opts, async (decoded, done) => {
      try {
        const response = await Usuario.findOne({
          where: {
            id: decoded.id,       
          },
        });
        if (!response) return done(null, false);
        return done(null, decoded);
      } catch (error) {
        done(error.message);
      }
    })
  );
};

