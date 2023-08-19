module.exports = (req, res, next) => {
  const userRoles = req.user.roles;
  if (userRoles.includes('admin')) {
    next();
  } else {
    res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador.' });
  }
};
