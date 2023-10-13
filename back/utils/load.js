/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');

const saltRounds = 10;

const {
  CourseCategory,
  AboutUS,
  Course,
  Registered,
  Schedule,
  ScheduleCourses,
  User,
} = require('../models');

async function start() {
  const admin = await User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    code: 'JP001',
    email: 'admin@admin.com',
    phone: '1155555555',
    password: await bcrypt.hash('password', saltRounds),
    active: true,
    admin: true,
  });
  const user1 = await User.create({
    firstName: 'Juan',
    lastName: 'Pérez',
    code: 'JP001',
    email: 'juan.perez@example.com',
    phone: '1155555555',
    password: await bcrypt.hash('password', saltRounds),
    active: true,
    admin: false,
  });
  const user2 = await User.create({
    firstName: 'María',
    lastName: 'Gómez',
    code: 'MG002',
    email: 'maria.gomez@example.com',
    phone: '1155555556',
    password: await bcrypt.hash('password', saltRounds),
    active: true,
    admin: false,
  });
  const user3 = await User.create({
    firstName: 'Luis',
    lastName: 'Rodríguez',
    code: 'LR003',
    email: 'luis.rodriguez@example.com',
    phone: '1155555557',
    password: await bcrypt.hash('password', saltRounds),
    active: true,
    admin: true,
  });
  const aboutUs1 = await AboutUS.create({
    active: true,
    title: 'Sobre Nosotros',
    subtitle: 'Descubre quiénes somos',
    image: 'https://www.xplora.eu/wp-content/uploads/como-escribir-web-sobre-nosotros.jpg',
    description: 'Somos una empresa que apoya a emprendedores, brindándoles herramientas para alcanzar el éxito.',
    priority: 1,
  });
  const aboutUs2 = await AboutUS.create({
    active: false,
    title: 'Historia',
    subtitle: 'Nuestra trayectoria',
    image: 'https://secure.gravatar.com/avatar/165d18487e3aa214335f1cb22d0e3913?s=600&d=mm&r=g',
    description: 'Más de 20 años de experiencia en el mercado.',
    priority: 2,
  });
  const aboutUs3 = await AboutUS.create({
    active: true,
    title: 'Equipo',
    subtitle: 'Esteban Quito',
    image: 'https://secure.gravatar.com/avatar/165d18487e3aa214335f1cb22d0e3913?s=600&d=mm&r=g',
    description: 'Nuestro CEO',
    priority: 3,
  });
  const aboutUs4 = await AboutUS.create({
    active: true,
    title: 'Nuestro Equipo',
    subtitle: 'María Gutiérrez',
    image: 'https://secure.gravatar.com/avatar/165d18487e3aa214335f1cb22d0e3913?s=600&d=mm&r=g',
    description: 'Conoce a María, parte esencial de nuestro equipo.',
    priority: 3,
  });
  const aboutUs5 = await AboutUS.create({
    active: true,
    title: 'Nuestro Equipo',
    subtitle: 'Pedro Sánchez',
    image: 'https://secure.gravatar.com/avatar/165d18487e3aa214335f1cb22d0e3913?s=600&d=mm&r=g',
    description: 'Descubre el trabajo de Pedro en nuestro equipo.',
    priority: 3,
  });
  const aboutUs6 = await AboutUS.create({
    active: true,
    title: 'Nuestro Equipo',
    subtitle: 'Laura Pérez',
    image: 'https://secure.gravatar.com/avatar/165d18487e3aa214335f1cb22d0e3913?s=600&d=mm&r=g',
    description: 'Laura es un miembro valioso de nuestro equipo.',
    priority: 3,
  });
  const aboutUs7 = await AboutUS.create({
    active: true,
    title: 'Nuestro Equipo',
    subtitle: 'Carlos Rodríguez',
    image: 'https://secure.gravatar.com/avatar/165d18487e3aa214335f1cb22d0e3913?s=600&d=mm&r=g',
    description: 'Carlos contribuye de manera excepcional a nuestro equipo.',
    priority: 3,
  });
  const aboutUs8 = await AboutUS.create({
    active: true,
    title: 'Nuestro Equipo',
    subtitle: 'Sofía Martínez',
    image: 'https://secure.gravatar.com/avatar/165d18487e3aa214335f1cb22d0e3913?s=600&d=mm&r=g',
    description: 'Sofía es un pilar fundamental de nuestro equipo.',
    priority: 3,
  });
  const courseCategory1 = await CourseCategory.create({
    name: 'Programación',
  });
  const courseCategory2 = await CourseCategory.create({
    name: 'Diseño Gráfico',
  });
  const courseCategory3 = await CourseCategory.create({
    name: 'Idiomas',
  });
  const courseCategory4 = await CourseCategory.create({
    name: 'Belleza y Moda',
  });
  const courseCategory5 = await CourseCategory.create({
    name: 'Artes Culinarias',
  });
  const course1 = await Course.create({
    name: 'Introducción a JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
    description: 'Aprende los fundamentos de la programación en JavaScript.',
    maxStudents: 30,
    start: new Date('2023-11-01'),
    end: new Date('2023-12-31'),
    active: true,
    price: 99,
    requirement: 'No se requieren conocimientos previos',
    teacher: 'Carlos Sánchez',
    CourseCategoryId: courseCategory1.id,
  });
  const course2 = await Course.create({
    name: 'Diseño de Logotipos',
    image: 'https://blend.co.ke/wp-content/uploads/2022/11/Illustrator.jpg',
    description: 'Crea logotipos impactantes con Adobe Illustrator.',
    maxStudents: 20,
    start: new Date('2023-11-15'),
    end: new Date('2023-12-30'),
    active: true,
    price: 79,
    requirement: 'Conocimientos básicos de diseño gráfico',
    teacher: 'Ana Martínez',
    CourseCategoryId: courseCategory2.id,
  });
  const course3 = await Course.create({
    name: 'Inglés Avanzado',
    image: 'https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg',
    description: 'Mejora tus habilidades en inglés con un enfoque avanzado.',
    maxStudents: 25,
    start: new Date('2023-10-15'),
    end: new Date('2023-12-31'),
    active: true,
    price: 129,
    requirement: 'Nivel intermedio de inglés',
    teacher: 'Laura Pérez',
    CourseCategoryId: courseCategory3.id,
  });
  const course4 = await Course.create({
    name: 'Programación en Python',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*m0H6-tUbW6grMlezlb52yw.png',
    description: 'Aprende a programar en Python, un lenguaje versátil y poderoso.',
    maxStudents: 25,
    start: new Date('2023-10-15'),
    end: new Date('2023-12-31'),
    active: true,
    price: 109,
    requirement: 'Conocimientos básicos de programación',
    teacher: 'Eduardo Martínez',
    CourseCategoryId: courseCategory1.id,
  });
  const course5 = await Course.create({
    name: 'Fotografía para Principiantes',
    image: 'https://www.fotodng.com/wp-content/uploads/2016/08/curso-fotografia-imaginacion.jpg',
    description: 'Inicia tu viaje en la fotografía con este curso apto para principiantes.',
    maxStudents: 20,
    start: new Date('2023-11-10'),
    end: new Date('2023-12-31'),
    active: true,
    price: 79,
    requirement: 'No se requieren conocimientos previos en fotografía',
    teacher: 'María Rodríguez',
    CourseCategoryId: courseCategory2.id,
  });
  const course6 = await Course.create({
    name: 'Curso de Cocina Italiana',
    image: 'https://www.gediscovery.edu.pe/uploads/cursos-libres-2/cocina-italiana.jpg',
    description: 'Aprende a preparar deliciosos platos italianos con auténticas recetas.',
    maxStudents: 20,
    start: new Date('2023-11-15'),
    end: new Date('2023-12-30'),
    active: true,
    price: 129,
    requirement: 'No se requieren conocimientos previos',
    teacher: 'Luigi Rossi',
    CourseCategoryId: courseCategory5.id, // Use the new category's ID.
  });
  const course7 = await Course.create({
    name: 'Curso de Uñas Semipermanentes',
    image: 'https://d22fxaf9t8d39k.cloudfront.net/c77e25f33e6878b298e81131508d7003ac003163ec666d0bd937c3076e13f93a364.jpeg',
    description: 'Aprende a realizar tratamientos de uñas semipermanentes y diseño de uñas.',
    maxStudents: 20,
    start: new Date('2023-11-20'),
    end: new Date('2023-12-31'),
    active: true,
    price: 89,
    requirement: 'Conocimientos básicos de manicura',
    teacher: 'Luisa Martínez',
    CourseCategoryId: courseCategory4.id,
  });
  const schedule1 = await Schedule.create({
    where: 'Buenos Aires',
    active: true,
    day: 'Lunes',
    schedule: '9:00 AM - 5:00 PM',
  });
  const schedule2 = await Schedule.create({
    where: 'Córdoba',
    active: true,
    day: 'Martes',
    schedule: '10:00 AM - 6:00 PM',
  });
  const schedule3 = await Schedule.create({
    where: 'Rosario',
    active: true,
    day: 'Miércoles',
    schedule: '8:00 AM - 4:00 PM',
  });
  const scheduleCourse1 = await ScheduleCourses.create({
    idCourse: course1.id,
    idSchedule: schedule1.id,
  });
  const scheduleCourse2 = await ScheduleCourses.create({
    idCourse: course2.id,
    idSchedule: schedule2.id,
  });
  const scheduleCourse3 = await ScheduleCourses.create({
    idCourse: course3.id,
    idSchedule: schedule3.id,
  });
  const registered11 = await Registered.create({
    idCourse: course1.id,
    idUser: user1.id,
  });
  const registered12 = await Registered.create({
    idCourse: course2.id,
    idUser: user1.id,
  });
  const registered13 = await Registered.create({
    idCourse: course3.id,
    idUser: user1.id,
  });
  const registered21 = await Registered.create({
    idCourse: course1.id,
    idUser: user2.id,
  });
  const registered22 = await Registered.create({
    idCourse: course2.id,
    idUser: user2.id,
  });
  const registered23 = await Registered.create({
    idCourse: course3.id,
    idUser: user2.id,
  });
  const registered31 = await Registered.create({
    idCourse: course1.id,
    idUser: user3.id,
  });
  const registered32 = await Registered.create({
    idCourse: course2.id,
    idUser: user3.id,
  });
  const registered33 = await Registered.create({
    idCourse: course3.id,
    idUser: user3.id,
  });
  const registered41 = await Registered.create({
    idCourse: course4.id,
    idUser: user1.id,
  });
  const registered42 = await Registered.create({
    idCourse: course5.id,
    idUser: user1.id,
  });
  const registered43 = await Registered.create({
    idCourse: course6.id,
    idUser: user1.id,
  });
  const registered44 = await Registered.create({
    idCourse: course7.id,
    idUser: user1.id,
  });
  const registered51 = await Registered.create({
    idCourse: course4.id,
    idUser: user2.id,
  });
  const registered52 = await Registered.create({
    idCourse: course5.id,
    idUser: user2.id,
  });
  const registered53 = await Registered.create({
    idCourse: course6.id,
    idUser: user2.id,
  });
  const registered54 = await Registered.create({
    idCourse: course7.id,
    idUser: user2.id,
  });
}
start();
