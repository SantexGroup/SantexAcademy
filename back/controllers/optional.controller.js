const { optionalService } = require('../services');

/**
 * Controlador que obtiene uan lista de OPCIONALES.
 *
 * Si la obtencion de datos es exitosa, se devuelve la lista con las OPCIONALES
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function getOptionals(req, res, next) {
  try {
    const optionals = await optionalService.fetchOptionals();

    res.status(200).send(optionals);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador que obtiene un OPCIONAL por su ID..
 *
 * Extrae los valores de los parametros de la solicitud HTTP mediante la
 * destructuracion del req.params
 *
 * Si la busqueda es exitosa, se devuelve el OPCIONAL
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function getOptionalById(req, res, next) {
  const { id } = req.params;

  try {
    const optional = await optionalService.fetchOptionalById(id);

    res.status(200).send(optional);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador que Crea un OPCIONAL.
 *
 * Extrae los valores del cuerpo de la solicitud HTTP mediante la
 * destructuracion del req.body
 *
 * Si la creación es exitosa, se devuelve el OPTINAL creado
 * y una respuesta HTTP con un código de estado 201 (creado)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function createOptional(req, res, next) {
  const optionalData = req.body;

  try {
    const optional = await optionalService.saveNewOptionalData(optionalData);

    res.status(201).send(optional);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador para actualizar un OPCIONAL.
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
async function updateOptional(req, res, next) {
  const { id } = req.params;
  const optionalData = req.body;

  try {
    const optinal = await optionalService.saveOptionalData(
      id,
      optionalData,
    );

    res.status(200).send(optinal);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador para eliminar un OPCIONAL.
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
async function deleteOptional(req, res, next) {
  const { id } = req.params;

  try {
    await optionalService.deleteOptionalData(id);

    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador que obtiene uan lista de OPCIONALES de un usuario.
 *
 * Si la obtencion de datos es exitosa, se devuelve la lista con las OPCIONALES
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function getOptionalsByUser(req, res, next) {
  const { id } = req.params;

  try {
    const optionals = await optionalService.fetchOptionalsByUserId(id);

    res.status(200).send(optionals);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getOptionals,
  getOptionalById,
  createOptional,
  updateOptional,
  deleteOptional,
  getOptionalsByUser,
};
