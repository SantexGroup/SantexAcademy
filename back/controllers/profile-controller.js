const { profileService } = require('../services');

/**
 * Controlador Crear un libro.
 *
 * Extrae los valores del cuerpo de la solicitud HTTP mediante la
 * destructuracion del req.body
 *
 * Si la creación es exitosa, se devuelve un libro (Book)
 * y una respuesta HTTP con un código de estado 201 (creado)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
async function getProfile(req, res, next) {
  // const {
  //   isbn, titulo, autor, year, library,
  // } = req.body;
  try {
    const book = await profileService.getProfileById(1);

    res.status(201).send(book);
  } catch (error) {
    next(error);
  }
}

/**
 * Controlador para obtener un libro por su id.
 *
 * Extrae los valores de los parametros de la solicitud HTTP mediante la
 * destructuracion del req.params
 *
 * Si la busqueda es exitosa, se devuelve un libro (Book)
 * y una respuesta HTTP con un código de estado 202 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
// async function getBookById(req, res, next) {
//   const { id } = req.params;

//   try {
//     const book = await bookService.getById(id);
//     res.status(200).send(book);
//   } catch (error) {
//     next(error);
//   }
// }

/**
 * Controlador para modificar un libro.
 *
 * El id del libro se extrae los valores de los parametros de la solicitud HTTP mediante la
 * destructuracion del req.params
 * Los datos del libro se obtienen mediante la destructuracion del cuerpo de la solicitud (req.body)
 *
 * Si la operacion es exitosa, se devuelve un libro (Book)
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
// async function editBook(req, res, next) {
//   const { id } = req.params;
//   const {
//     isbn, titulo, autor, year, library,
//   } = req.body;

//   try {
//     const book = await bookService.edit(id, isbn, titulo, autor, year, library);
//     res.status(200).send(book);
//   } catch (error) {
//     next(error);
//   }
// }

/**
 * Controlador para eliminar un libro.
 *
 * El id del libro se extrae los valores de los parametros de la solicitud HTTP mediante la
 * destructuracion del req.params
 *
 * Si la operacion es exitosa, se devuelve un un mensaje
 * y una respuesta HTTP con un código de estado 200 (Ok)
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
// async function deleteBook(req, res, next) {
//   const { id } = req.params;

//   try {
//     await bookService.deleteBook(id);
//     res.status(200).send("Libro eliminado");
//   } catch (error) {
//     next();
//   }
// }

/**
 * Controlador para obtener todos los libros.
 *
 * Si ocurre algún error durante la operacion,
 * la función captura el error y llama a la función next,
 * lo que permite que el control pase al siguiente middleware que maneja los errores.
 */
// async function getAllBooks(req, res, next) {

//   try {
//     const books = await bookService.getAll();
//     res.status(200).send(books);
//   } catch (error) {
//     next(error);
//   }
// }

module.exports = {
  getProfile, // getAllBooks, getBookById,  editBook, deleteBook,
};
