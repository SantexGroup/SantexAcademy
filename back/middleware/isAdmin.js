module.exports = (req, res, next) => {
  const userIsAdmin = true;
  if (!userIsAdmin) {
    return res.status(403).json({ error: 'Acceso no autorizado.' });
  }
  // Si el usuario es un administrador, continúa con la siguiente función
  next();
};
