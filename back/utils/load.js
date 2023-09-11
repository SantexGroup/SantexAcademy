const { CourseCategory } = require("../models");
const {CourseProvider, ScheduleProvider}= require("../providers")
// Datos a cargar
const categoriesToLoad = ["Talleres", "Cursos", "Seminarios"];
const objetCourse1 = {
  name: "Taller de diseño y reciclaje",
  image:"https://instagram.fcor2-2.fna.fbcdn.net/v/t51.2885-15/351766151_278661664522157_8803022371375872742_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcor2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zdpyVfIgCU4AX8d2bHO&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzExOTkwODMxNDc3OTcyOTkyMA%3D%3D.2-ccb7-5&oh=00_AfD-Vplt2vFHmNGKctuHThMp5gDGnRvf-VDQ9ACK-ndlrQ&oe=64E55AA8&_nc_sid=b41fef",
  description: "Diseño y materializacion de productos ecologicos",
  maxStudents: 50,
  start: "2023-6-14",
  end: "2023-6-21",
  active: true,
  price: 10000,
  requirement: "llevar la materia prima",
  teacher: "Juan Perez",
  CourseCategoryName: "Talleres",
};
const objetCourse2 = {
  name: "Curso de sublimacion",
  image:"https://instagram.fcor2-1.fna.fbcdn.net/v/t51.2885-15/357416675_265987282695879_14194642772113204_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcor2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1WbUEFnaCYwAX8RezIx&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEzODc3MjE3MzI3OTc0NzYwMQ%3D%3D.2-ccb7-5&oh=00_AfAsfZsjU3CmuOwHT2i3dZFfVgE2XyarIrlfeWEbsKQ-Pg&oe=64E3EB94&_nc_sid=ee9879",
  description: "Podras aprender a subliminar distintos productos como gorras, tazas, llaveros, entre otros",
  maxStudents: 500,
  start: "2024-1-11",
  end: "2024-2-11",
  active: false,
  price: 15000,
  requirement: "nada",
  teacher: "Roberto Gusman",
  CourseCategoryName: "Cursos",
};
const objetCourse3 = {
    name: "Seminario de velas",
    image:"https://instagram.fcor2-1.fna.fbcdn.net/v/t51.2885-15/357462975_5862168230556579_1249311485733936949_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcor2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=5a_rpcXiMe0AX8IOqlN&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzEzODc3MTU3OTQwODQ2MTQ3Mw%3D%3D.2-ccb7-5&oh=00_AfDXkAhCX3J_xqlAg6hb5YKeONnNvQaf32n1ZW2x_eOOJQ&oe=64E421BA&_nc_sid=b41fef",
    description: "Aprende a realizar velas aromaticas y creativas",
    maxStudents: 100,
    start: "2024-2-11",
    end: "2024-3-11",
    active: false,
    price: 50000,
    requirement: "Tener ganas ;)",
    teacher: "Agustina Simon",
    CourseCategoryName: "Seminarios",
  };
const objetSchedule1 = {
    active: true,
	where: "Aula 1",
	course: "Taller de diseño y reciclaje",
	day:"lunes",
	schedule:"15 a 17"
};
const objetSchedule2 = {
    active: false,
	where: "Aula 3",
	course: "Curso de sublimacion",
	day:"martes",
	schedule:"19 a 21"
};
const objetSchedule3 = {
    active: false,
	where: "Aula 4",
	course: "Seminario de velas",
	day:"jueves",
	schedule:"10 a 12"
};
// Carga de datos
async function loadData() {
  for (const categoryName of categoriesToLoad) {
    await CourseCategory.create({ name: categoryName });
  }
  await CourseProvider.createCourse(objetCourse1);
  await CourseProvider.createCourse(objetCourse2);
  await CourseProvider.createCourse(objetCourse3);
  await ScheduleProvider.createSchedule(objetSchedule1);
  await ScheduleProvider.createSchedule(objetSchedule2);
  await ScheduleProvider.createSchedule(objetSchedule3)

  console.log("Datos cargados exitosamente.");
  process.exit();
}

loadData();
