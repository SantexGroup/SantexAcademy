function checkValidationId(req, res, next) {
  if (req.user.id == req.params.id) {
    return next();
  } return res.status(400).json({ message: 'El usuario no tiene permiso de hacer cambios' });
}

module.exports = {
  checkValidationId,
};
