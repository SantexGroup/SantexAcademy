const CountryService = require('../services/countries.services');

async function countriesGet(
  req,
  res,
  next,
) {
  try {
    const countries = await CountryService.getCountries();
    res.status(200).send(countries);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  countriesGet,
};
