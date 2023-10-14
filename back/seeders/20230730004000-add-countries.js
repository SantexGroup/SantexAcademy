'use strict';

const { COUNTRIES_TABLE_NAME } = require('../helpers/sequelize.helper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      COUNTRIES_TABLE_NAME,
      [
        {
          id: 1,
          country: 'Afganistán',
        },
        {
          id: 2,
          country: 'Albania',
        },
        {
          id: 3,
          country: 'Alemania',
        },
        {
          id: 4,
          country: 'Andorra',
        },
        {
          id: 5,
          country: 'Angola',
        },
        {
          id: 6,
          country: 'Antigua y Barbuda',
        },
        {
          id: 7,
          country: 'Arabia Saudita',
        },
        {
          id: 8,
          country: 'Argelia',
        },
        {
          id: 9,
          country: 'Argentina',
        },
        {
          id: 10,
          country: 'Armenia',
        },
        {
          id: 11,
          country: 'Australia',
        },
        {
          id: 12,
          country: 'Austria',
        },
        {
          id: 13,
          country: 'Azerbaiyán',
        },
        {
          id: 14,
          country: 'Bahamas',
        },
        {
          id: 15,
          country: 'Bangladés',
        },
        {
          id: 16,
          country: 'Barbados',
        },
        {
          id: 17,
          country: 'Baréin',
        },
        {
          id: 18,
          country: 'Bélgica',
        },
        {
          id: 19,
          country: 'Belice',
        },
        {
          id: 20,
          country: 'Benín',
        },
        {
          id: 21,
          country: 'Bielorrusia',
        },
        {
          id: 22,
          country: 'Birmania',
        },
        {
          id: 23,
          country: 'Bolivia',
        },
        {
          id: 24,
          country: 'Bosnia y Herzegovina',
        },
        {
          id: 25,
          country: 'Botsuana',
        },
        {
          id: 26,
          country: 'Brasil',
        },
        {
          id: 27,
          country: 'Brunéi',
        },
        {
          id: 28,
          country: 'Bulgaria',
        },
        {
          id: 29,
          country: 'Burkina Faso',
        },
        {
          id: 30,
          country: 'Burundi',
        },
        {
          id: 31,
          country: 'Bután',
        },
        {
          id: 32,
          country: 'Cabo Verde',
        },
        {
          id: 33,
          country: 'Camboya',
        },
        {
          id: 34,
          country: 'Camerún',
        },
        {
          id: 35,
          country: 'Canadá',
        },
        {
          id: 36,
          country: 'Catar',
        },
        {
          id: 37,
          country: 'Chad',
        },
        {
          id: 38,
          country: 'Chile',
        },
        {
          id: 39,
          country: 'China',
        },
        {
          id: 40,
          country: 'Chipre',
        },
        {
          id: 41,
          country: 'Ciudad del Vaticano',
        },
        {
          id: 42,
          country: 'Colombia',
        },
        {
          id: 43,
          country: 'Comoras',
        },
        {
          id: 44,
          country: 'Corea del Norte',
        },
        {
          id: 45,
          country: 'Corea del Sur',
        },
        {
          id: 46,
          country: 'Costa de Marfil',
        },
        {
          id: 47,
          country: 'Costa Rica',
        },
        {
          id: 48,
          country: 'Croacia',
        },
        {
          id: 49,
          country: 'Cuba',
        },
        {
          id: 50,
          country: 'Dinamarca',
        },
        {
          id: 51,
          country: 'Dominica',
        },
        {
          id: 52,
          country: 'Ecuador',
        },
        {
          id: 53,
          country: 'Egipto',
        },
        {
          id: 54,
          country: 'El Salvador',
        },
        {
          id: 55,
          country: 'Emiratos Árabes Unidos',
        },
        {
          id: 56,
          country: 'Eritrea',
        },
        {
          id: 57,
          country: 'Eslovaquia',
        },
        {
          id: 58,
          country: 'Eslovenia',
        },
        {
          id: 59,
          country: 'España',
        },
        {
          id: 60,
          country: 'Estados Unidos',
        },
        {
          id: 61,
          country: 'Estonia',
        },
        {
          id: 62,
          country: 'Etiopía',
        },
        {
          id: 63,
          country: 'Filipinas',
        },
        {
          id: 64,
          country: 'Finlandia',
        },
        {
          id: 65,
          country: 'Fiyi',
        },
        {
          id: 66,
          country: 'Francia',
        },
        {
          id: 67,
          country: 'Gabón',
        },
        {
          id: 68,
          country: 'Gambia',
        },
        {
          id: 69,
          country: 'Georgia',
        },
        {
          id: 70,
          country: 'Ghana',
        },
        {
          id: 71,
          country: 'Granada',
        },
        {
          id: 72,
          country: 'Grecia',
        },
        {
          id: 73,
          country: 'Guatemala',
        },
        {
          id: 74,
          country: 'Guyana',
        },
        {
          id: 75,
          country: 'Guinea',
        },
        {
          id: 76,
          country: 'Guinea ecuatorial',
        },
        {
          id: 77,
          country: 'Guinea-Bisáu',
        },
        {
          id: 78,
          country: 'Haití',
        },
        {
          id: 79,
          country: 'Honduras',
        },
        {
          id: 80,
          country: 'Hungría',
        },
        {
          id: 81,
          country: 'India',
        },
        {
          id: 82,
          country: 'Indonesia',
        },
        {
          id: 83,
          country: 'Irak',
        },
        {
          id: 84,
          country: 'Irán',
        },
        {
          id: 85,
          country: 'Irlanda',
        },
        {
          id: 86,
          country: 'Islandia',
        },
        {
          id: 87,
          country: 'Islas Marshall',
        },
        {
          id: 88,
          country: 'Islas Salomón',
        },
        {
          id: 89,
          country: 'Israel',
        },
        {
          id: 90,
          country: 'Italia',
        },
        {
          id: 91,
          country: 'Jamaica',
        },
        {
          id: 92,
          country: 'Japón',
        },
        {
          id: 93,
          country: 'Jordania',
        },
        {
          id: 94,
          country: 'Kazajistán',
        },
        {
          id: 95,
          country: 'Kenia',
        },
        {
          id: 96,
          country: 'Kirguistán',
        },
        {
          id: 97,
          country: 'Kiribati',
        },
        {
          id: 98,
          country: 'Kuwait',
        },
        {
          id: 99,
          country: 'Laos',
        },
        {
          id: 100,
          country: 'Lesoto',
        },
        {
          id: 101,
          country: 'Letonia',
        },
        {
          id: 102,
          country: 'Líbano',
        },
        {
          id: 103,
          country: 'Liberia',
        },
        {
          id: 104,
          country: 'Libia',
        },
        {
          id: 105,
          country: 'Liechtenstein',
        },
        {
          id: 106,
          country: 'Lituania',
        },
        {
          id: 107,
          country: 'Luxemburgo',
        },
        {
          id: 108,
          country: 'Macedonia del Norte',
        },
        {
          id: 109,
          country: 'Madagascar',
        },
        {
          id: 110,
          country: 'Malasia',
        },
        {
          id: 111,
          country: 'Malaui',
        },
        {
          id: 112,
          country: 'Maldivas',
        },
        {
          id: 113,
          country: 'Malí',
        },
        {
          id: 114,
          country: 'Malta',
        },
        {
          id: 115,
          country: 'Marruecos',
        },
        {
          id: 116,
          country: 'Mauricio',
        },
        {
          id: 117,
          country: 'Mauritania',
        },
        {
          id: 118,
          country: 'México',
        },
        {
          id: 119,
          country: 'Micronesia',
        },
        {
          id: 120,
          country: 'Moldavia',
        },
        {
          id: 121,
          country: 'Mónaco',
        },
        {
          id: 122,
          country: 'Mongolia',
        },
        {
          id: 123,
          country: 'Montenegro',
        },
        {
          id: 124,
          country: 'Mozambique',
        },
        {
          id: 125,
          country: 'Namibia',
        },
        {
          id: 126,
          country: 'Nauru',
        },
        {
          id: 127,
          country: 'Nepal',
        },
        {
          id: 128,
          country: 'Nicaragua',
        },
        {
          id: 129,
          country: 'Níger',
        },
        {
          id: 130,
          country: 'Nigeria',
        },
        {
          id: 131,
          country: 'Noruega',
        },
        {
          id: 132,
          country: 'Nueva Zelanda',
        },
        {
          id: 133,
          country: 'Omán',
        },
        {
          id: 134,
          country: 'Países Bajos',
        },
        {
          id: 135,
          country: 'Pakistán',
        },
        {
          id: 136,
          country: 'Palaos',
        },
        {
          id: 137,
          country: 'Panamá',
        },
        {
          id: 138,
          country: 'Papúa Nueva Guinea',
        },
        {
          id: 139,
          country: 'Paraguay',
        },
        {
          id: 140,
          country: 'Perú',
        },
        {
          id: 141,
          country: 'Polonia',
        },
        {
          id: 142,
          country: 'Portugal',
        },
        {
          id: 143,
          country: 'Reino Unido',
        },
        {
          id: 144,
          country: 'República Centroafricana',
        },
        {
          id: 145,
          country: 'República Checa',
        },
        {
          id: 146,
          country: 'República del Congo',
        },
        {
          id: 147,
          country: 'República Democrática del Congo',
        },
        {
          id: 148,
          country: 'República Dominicana',
        },
        {
          id: 149,
          country: 'Ruanda',
        },
        {
          id: 150,
          country: 'Rumanía',
        },
        {
          id: 151,
          country: 'Rusia',
        },
        {
          id: 152,
          country: 'Samoa',
        },
        {
          id: 153,
          country: 'San Cristóbal y Nieves',
        },
        {
          id: 154,
          country: 'San Marino',
        },
        {
          id: 155,
          country: 'San Vicente y las Granadinas',
        },
        {
          id: 156,
          country: 'Santa Lucía',
        },
        {
          id: 157,
          country: 'Santo Tomé y Príncipe',
        },
        {
          id: 158,
          country: 'Senegal',
        },
        {
          id: 159,
          country: 'Serbia',
        },
        {
          id: 160,
          country: 'Seychelles',
        },
        {
          id: 161,
          country: 'Sierra Leona',
        },
        {
          id: 162,
          country: 'Singapur',
        },
        {
          id: 163,
          country: 'Siria',
        },
        {
          id: 164,
          country: 'Somalia',
        },
        {
          id: 165,
          country: 'Sri Lanka',
        },
        {
          id: 166,
          country: 'Suazilandia',
        },
        {
          id: 167,
          country: 'Sudáfrica',
        },
        {
          id: 168,
          country: 'Sudán',
        },
        {
          id: 169,
          country: 'Sudán del Sur',
        },
        {
          id: 170,
          country: 'Suecia',
        },
        {
          id: 171,
          country: 'Suiza',
        },
        {
          id: 172,
          country: 'Surinam',
        },
        {
          id: 173,
          country: 'Tailandia',
        },
        {
          id: 174,
          country: 'Tanzania',
        },
        {
          id: 175,
          country: 'Tayikistán',
        },
        {
          id: 176,
          country: 'Timor Oriental',
        },
        {
          id: 177,
          country: 'Togo',
        },
        {
          id: 178,
          country: 'Tonga',
        },
        {
          id: 179,
          country: 'Trinidad y Tobago',
        },
        {
          id: 180,
          country: 'Túnez',
        },
        {
          id: 181,
          country: 'Turkmenistán',
        },
        {
          id: 182,
          country: 'Turquía',
        },
        {
          id: 183,
          country: 'Tuvalu',
        },
        {
          id: 184,
          country: 'Ucrania',
        },
        {
          id: 185,
          country: 'Uganda',
        },
        {
          id: 186,
          country: 'Uruguay',
        },
        {
          id: 187,
          country: 'Uzbekistán',
        },
        {
          id: 188,
          country: 'Vanuatu',
        },
        {
          id: 189,
          country: 'Venezuela',
        },
        {
          id: 190,
          country: 'Vietnam',
        },
        {
          id: 191,
          country: 'Yemen',
        },
        {
          id: 192,
          country: 'Yibuti',
        },
        {
          id: 193,
          country: 'Zambia',
        },
        {
          id: 194,
          country: 'Zimbabue',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(COUNTRIES_TABLE_NAME, null, {});
  },
};
