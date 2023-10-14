const MaritalServices = require('../services/marital.services');

async function maritalGet(
  req,
  res,
  next,
) {
  try {
    const marital = await MaritalServices.getMarital();
    res.status(200).send(marital);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  maritalGet,
};
