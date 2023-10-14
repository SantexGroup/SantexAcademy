const SexsServices = require('../services/sexs.services');

async function sexGet(
  req,
  res,
  next,
) {
  try {
    const gender = await SexsServices.getSexs();
    res.status(200).send(gender);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  sexGet,
};
