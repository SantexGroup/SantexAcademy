// const descripcionContactoService = require('./descripcionContactoServices');

class DescripcionContactoProvider {
  async getAllDescripciones() {
    const descripcion = await this.descripcionContactoService.getAllDescripciones();

    return descripcion;
  }

  async getDescripcionById(id) {
    const descripcion = await this.descripcionContactoService.getDescripcionById(id);

    return descripcion;
  }

  async createDescripcion(descripcionData) {
    const descripcion = await this.descripcionContactoServ.createDescripcion(descripcionData);

    return descripcion;
  }

  async updateDescripcion(id, descripcionData) {
    const descripcion = await this.descripcionContactoServ.updateDescripcion(id, descripcionData);

    return descripcion;
  }

  async deleteDescripcion(id) {
    const descripcion = await this.descripcionContactoServ.deleteDescripcion(id);

    return descripcion;
  }
}

module.exports = new DescripcionContactoProvider();
