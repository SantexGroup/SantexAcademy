const { administrador } = require('../models');

async function admiCreado() {
    try {
        // Intenta buscar el administrador 'adminusername' en la base de datos
        let adminPrincipal = await administrador.findOne({
            where: {
                nombreUsuario: 'adminusername',
            },
        });

        if (!adminPrincipal) {
            // Si el administrador no existe, créalo
            const nuevoAdminData = {
                nombreCompleto: 'Nombre del Administrador',
                nombreUsuario: 'adminusername',
                correoElectronico: 'admin@example.com',
                contraseña: 'password',
                // Añade otros atributos necesarios para el administrador principal
            };

            adminPrincipal = await administrador.create(nuevoAdminData);
        }

        return adminPrincipal.toJSON();
    } catch (error) {
        throw error;
    }
}


module.exports = {admiCreado}




