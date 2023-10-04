const { administrador } = require('../models');

async function admiCreado() {
    const nuevoAdminData = {
        nombreCompleto: 'Nombre del Administrador',
        nombreUsuario: 'adminusername',
        correoElectronico: 'admin@example.com',
        contraseña: 'password',
    };
    try {

        const nuevoAdmin = await administrador.create(nuevoAdminData);
        return nuevoAdmin.toJSON();
    } catch (error) {
        throw error;
    }
}
module.exports = {admiCreado}




