const breedService = require('../services/breed.services');

async function breedsList(req, res, next){
  try{
    //const { page } = req.params || 1;
    const list = await breedService.getAll();
    //console.log(list);
    res.json(list);

  }
  catch(error){
    next(error);
  }
}

module.exports = {
  breedsList,  
};
