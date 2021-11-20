"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "razas",
      [
        {
          raza: "Airedale Terrier",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Akita Inu",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "American Staffordshire Terrier",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "American Pitbull Terrier",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Bóxer",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Bullmastif",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Bull Terrier",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Cané Corso",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Doberman",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Dogo Argentino",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Dogo Alemán",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Gran Danés",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Dogo Canario",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Presa Canario",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Dogo de Burdeos",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Fila Brasileño",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Gran perro Japonés",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Kuvas",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Mastiff (Mastín Inglés)",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Mastín napolitano",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Ovejero Alemán",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Ovejero Belga",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Pastor del Cáucaso",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Rottweiler",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "San Bernardo",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Schnauzer Gigante",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Staffordshire Bull Terrier",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Viejo Pastor Inglés",
          peligroso: true,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Caniche",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Chihuahua",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Chow Chow",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Cocker",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Golden retriever",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Pomerania",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Beagle",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Collie",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Labrador",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Mestizo",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Pekines",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Pug",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Salchicha",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
        {
          raza: "Schnauzer",
          peligroso: false,
          createAt: "2021-05-05 00:00:00",
          updateAt: "2021-05-05 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Breeds", null, {});
  },
};
