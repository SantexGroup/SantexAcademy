const userServices = require('../services/userServices');

async function getAll(req, res, next) {
    try{
    const users = await userServices.getAll();
    res.status(200).send(users);
} catch(error) {
    next(error);
}
};

module.exports = { getAll }