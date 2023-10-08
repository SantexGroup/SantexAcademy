const userService = require('./user');
const emailService = require('./emailService');
const cursoService = require('./curso');
const nivelService = require('./nivel');
const tipoDeUsuarioService = require('./tipodeusuario');
const matriculaService = require('./matricula');
const docenteService = require('./docente');
const especialidadService = require('./especialidad');
const docenteporcursoService = require('./docenteporcurso');
const cursadoPorAlumnoService = require('./cursadoporalumno')

module.exports = {
  userService,
  emailService,
  cursoService,
  nivelService,
  tipoDeUsuarioService,
  matriculaService,
  docenteService,
  especialidadService,
  docenteporcursoService,
  cursadoPorAlumnoService,
};
