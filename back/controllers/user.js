const createUserCont = (_req, res) => {
  res.status(200).send({
    msg: 'signup de users',
  });
};

const loginUserCont = (_req, res) => {
  res.status(200).send({
    msg: 'login de users',
  });
};

const modifUserCont = (req, res) => {
  res.status(200).send({
    msg: `modif user de ${req.params.id}`,
  });
};

const deleteUserCont = (req, res) => {
  res.status(200).send({
    msg: `eliminar user de ${req.params.id}`,
  });
};

const getAllUserCont = (_req, res) => {
  res.status(200).send({
    msg: 'get all users',
  });
};

const getOneUserCont = (req, res) => {
  res.status(200).send({
    msg: `buscar el user de id: ${req.params.id}`,
  });
};

module.exports = {
  createUserCont, loginUserCont, modifUserCont, deleteUserCont, getAllUserCont, getOneUserCont,
};
