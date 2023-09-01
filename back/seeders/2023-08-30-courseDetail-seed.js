'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courseDetails', [
      {
        title: 'Presentación',
        paragraph1: 'En este curso aprenderás los conceptos fundamentales de programación en C++.',
        paragraph2: 'Con ejemplos prácticos y ejercicios, dominarás la sintaxis y las estructuras básicas de C++.',
        image1url: 'https://example.com/c++_intro_image1.jpg',
        image2url: 'https://example.com/c++_intro_image2.jpg',
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: 'Descubre el poder de Python y su versatilidad en este curso introductorio.',
        paragraph2: 'Aprende a desarrollar programas simples y a resolver problemas usando Python.',
        image1url: 'https://example.com/python_intro_image1.jpg',
        image2url: 'https://example.com/python_intro_image2.jpg',
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: 'Sumérgete en el mundo del diseño gráfico y aprende las bases para crear piezas visuales impactantes.',
        paragraph2: 'Explora los principios del diseño y las herramientas clave en este curso esencial.',
        image1url: 'https://example.com/design_intro_image1.jpg',
        image2url: 'https://example.com/design_intro_image2.jpg',
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: 'Aprende los fundamentos de la fotografía y cómo capturar imágenes impresionantes.',
        paragraph2: 'Explora la composición, la iluminación y los aspectos técnicos de la fotografía en este curso.',
        image1url: 'https://example.com/photography_intro_image1.jpg',
        image2url: 'https://example.com/photography_intro_image2.jpg',
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: 'Descubre las estrategias efectivas de marketing en línea para promocionar tu negocio.',
        paragraph2: 'Aprende a utilizar las plataformas digitales para llegar a tu público objetivo.',
        image1url: 'https://example.com/marketing_intro_image1.jpg',
        image2url: 'https://example.com/marketing_intro_image2.jpg',
        courseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: 'Mejora tus habilidades en inglés y comunícate con confianza en situaciones cotidianas.',
        paragraph2: 'Aprende gramática, vocabulario y pronunciación en este curso de inglés intermedio.',
        image1url: 'https://example.com/english_intro_image1.jpg',
        image2url: 'https://example.com/english_intro_image2.jpg',
        courseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('courseDetails', null, {});
  },
};
