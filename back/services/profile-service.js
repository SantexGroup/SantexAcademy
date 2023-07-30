// const { NotFound } = require("../exceptions")
// const { Book } = require("../models/book")
// const libraryService = require('./library-service')
// const { User } = require('../models');
const {
  Profile,
  Experience,
  Reference,
  Language,
  ExpirenceType,
  ExperienceStatus,
  Country,
  Skill,
  Formation,
  FormationStatus,
  FormationType,
  Optional,
  Marital,
  Sex,
} = require('../models');

async function getProfileById(id) {
  const EXPERIENCE = {
    model: Experience,
    include: [ExperienceStatus, ExpirenceType, Country],
  };

  const FORMATION = {
    model: Formation,
    include: [FormationStatus, FormationType],
  };

  const OPTIONAL = {
    model: Optional,
    include: [Marital, Sex],
  };

  const profiles = await Profile.findByPk(id, {
    include: [EXPERIENCE, Reference, Language, Skill, FORMATION, OPTIONAL],
    // include: [OPTIONAL],
  });
  return profiles;
}

/**
 * Editar un libro.
 *
 * @param {number} id - Identificador del libro
 * @param {number} isbn - Identificador único en todo el mundo
 * @param {string} titulo - Título del libro
 * @param {string} autor - Autor del libro
 * @param {string} year - Año de edición del libro
 * @param {number} library - El identificador de la librería en donde este libro se encuentra
 *
 * @returns {Book} El libro editado.
 */
// async function edit(id, isbn, titulo, autor, year, idLibrary) {
//     const book = await getById(id)

//     if (isbn) {
//         book.isbn = isbn
//     }

//     if (titulo) {
//         book.titulo = titulo
//     }

//     if (autor) {
//         book.autor = autor
//     }

//     if (year) {
//         book.year = year
//     }

//     if (await libraryService.isValidLibrary(idLibrary)) {
//         book.library = idLibrary
//     }

//     const bookEdited = await book.save()
//     return bookEdited
// }

/**
 * Eliminar un libro.
 *
 * @param {number} id - Identificador del libro
 */
// async function deleteBook(id) {
//     const book = await getById(id)

//     book.destroy()
// }

/**
 * Obtener un libro en particular por su id.
 * Si no se encuentra ningún libro con ese id, se lanza una exception del tipo NotFound
 *
 * @param {number} id - Identificador del libro
 *
 * @returns {Book} El libro encontrado.
 */
// async function getById(id) {
//     const book = await Book.findByPk(id)

//     if (!book) {
//         throw new NotFound('Libro no encontrado')
//     }

//     return book;
// }

/**
 * Obtener todos los libros.
 *
 * @throws {NotFound} - Si no existen libros cargadas
 * @returns {Array<Book>} Lista de libros.
 */
// async function getAll() {
//     const book = await Book.findAll()

//     if (book.length == 0){
//         throw new NotFound('No existen libros cargados')
//     }
//     return book
// }

module.exports = { getProfileById };
