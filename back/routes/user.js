const Express = require('express');

const router = Express.Router();

// controller
const {
  createUserCont, loginUserCont, modifUserCont, deleteUserCont, getAllUserCont, getOneUserCont,
} = require('../controllers/user');

// user routes
router.get('/all', getAllUserCont);
router.get('/:id', getOneUserCont);
router.post('/signup', createUserCont);
router.post('/login', loginUserCont);
router.put('/:id', modifUserCont);
router.delete('/:id', deleteUserCont);

module.exports = router;
