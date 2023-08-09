/**
 * Pasar un estring en camel case case a snake
 */
function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

/**
 * Reemplazar la propiedad en camel case de un objeto por snake case
 */
function propertyToSnakeCase(object, property) {
  // crear una nuev propiedad en snake case
  const snakeCaseProperty = camelToSnakeCase(property);
  object[snakeCaseProperty] = object[property];

  // eliminar la propiedad original
  delete object[property];
}

module.exports = { propertyToSnakeCase };
