const { formationService } = require('../services');

/**
 * Controlador que obtiene uan lista de formaciones.
 *
 * Si la obtencion de datos es exitosa, se devuelve la lista con las formaciones
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function getFormations(req, res, next) {
  try {
    const formation = await formationService.fetchFormations();
    // const formations = await formationService.fetchFormations(req.query);

    res.status(200).send(formation);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador que obtiene uan lista de formaciones de un usuario.
 *
 * Si la obtencion de datos es exitosa, se devuelve la lista con las formaciones
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function getFormationsByUser(req, res, next) {
  const { id } = req.params;

  try {
    const formation = await formationService.fetchFormationssByUserId(id);

    res.status(200).send(formation);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador que obtiene una FORMACION por su ID..
 *
 * Extrae los valores de los parametros de la solicitud HTTP mediante la
 * destructuracion del req.params
 *
 * Si la busqueda es exitosa, se , se devuelve la formacion (Formation)
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function getFormationById(req, res, next) {
  const { id } = req.params;

  try {
    const formations = await formationService.fetchFormationById(id);

    res.status(200).send(formations);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador Crear una FORMACION.
 *
 * Extrae los valores del cuerpo de la solicitud HTTP mediante la
 * destructuracion del req.body
 *
 * Si la creación es exitosa, se devuelve la formacion creada (Formation)
 * y una respuesta HTTP con un código de estado 201 (creado)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function createFormation(req, res, next) {
  const formationData = req.body;

  try {
    const formation = await formationService.saveNewFormationData(formationData);

    res.status(201).send(formation);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador para actualizar una Formacion.
 *
 * El ID de la formacion a actualizar se obtiene mediante la
 * destructuracion del req.params
 * Los datos de la formacion se obtienen mediante la destructuracion
 * del cuerpo de la solicitud (req.body)
 *
 * Si la operacion es exitosa, se devuelve la formacion actualizada
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la opearcióm,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function updateFormation(req, res, next) {
  const { id } = req.params;
  const formationData = req.body;

  try {
    const formation = await formationService.saveFormationData(
      id,
      formationData,
    );

    res.status(200).send(formation);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador para eliminar una formacion.
 *
 * El id se extrae los valores de los parametros de la solicitud HTTP mediante la
 * destructuracion del req.params
 *
 * Si la operacion es exitosa, se devuelve un un mensaje
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function deleteFormation(req, res, next) {
  const { id } = req.params;

  try {
    await formationService.deleteFormationData(id);

    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getFormations,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
  getFormationsByUser,
};
