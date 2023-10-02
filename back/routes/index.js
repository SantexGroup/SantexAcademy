const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const userRoutes = require('./user');
const cursoRoutes = require('./curso');
const nivelRoutes = require('./nivel');
const tiposDeUsuarioRoutes = require('./tipodeusuario');
const matriculaRoutes = require('./matricula');
const docenteRoutes = require('./docente');
const especialidadRoutes = require('./especialidad');
const docentePorCursoRoutes = require('./docenteporcurso');
const cursadoPorAlumnoRoutes = require('./cursadoporalumno')
const app = Express();

// Rutas

// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'deje que corra, que al recibir: pong! Indica que todo marcha bien.',
  });
});
app.use('/user', userRoutes);
app.use('/curso', cursoRoutes);
app.use('/nivel', nivelRoutes);
app.use('/tipodeusuario', tiposDeUsuarioRoutes);
app.use('/matricula', matriculaRoutes);
app.use('/docente', docenteRoutes)
app.use('/especialidad', especialidadRoutes)
app.use('/docenteporcurso', docentePorCursoRoutes)
app.use('/cursadoporalumno', cursadoPorAlumnoRoutes)
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
