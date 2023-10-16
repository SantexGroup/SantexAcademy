// const DescripcionContacto = require('../models/descripcionContactoModel');
// const descripcionContactoProvider = require('../providers/descripcionContactoProviders');
const DescripcionContactoException = require('../exceptions/descripcionContactoExceptions');

class DescripcionContactoService {
  async getAllDescripciones() {
    const descripcion = await this.descripcionContactoProvider.findAll();

    return descripcion;
  }

  async getDescripcionById(id) {
    const descripcion = await this.descripcionContactoProvider.findByPk(id);

    if (!descripcion) {
      throw new DescripcionContactoException('Descripción de contacto no encontrada');
    }

    return descripcion;
  }

  async createDescripcion(descripcionData) {
    const descripcion = await this.DescripcionContacto.create(descripcionData);

    return descripcion;
  }

  async updateDescripcion(id, descripcionData) {
    const descripcion = await this.DescripcionContacto.findByPk(id);

    if (!descripcion) {
      throw new DescripcionContactoException('Descripción de contacto no encontrada');
    }

    const descripcionUpdate = await descripcion.update(descripcionData);

    return descripcionUpdate;
  }

  async deleteDescripcion(id) {
    const descripcion = await this.DescripcionContacto.findByPk(id);

    if (!descripcion) {
      throw new DescripcionContactoException('Descripción de contacto no encontrada');
    }

    await descripcion.destroy();
  }
}

module.exports = new DescripcionContactoService();
