/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcrypt');
const crypto = require('crypto');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: crypto.randomUUID(),
      firstName: 'Admin1',
      lastName: '',
      email: 'admin1@gmail.com',
      password: await bcrypt.hash(
        'imadmin1',
        10,
      ),
      course: null,
      attendance: 0,
      enrolled: false,
      isAdmin: true,
      isTeacher: false,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Admin2',
      lastName: '',
      email: 'admin2@gmail.com',
      password: await bcrypt.hash(
        'imadmin2',
        10,
      ),
      course: null,
      attendance: 0,
      enrolled: false,
      isAdmin: true,
      isTeacher: false,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Teacher1',
      lastName: 'One',
      email: 'teacher1@gmail.com',
      password: await bcrypt.hash(
        'imteacher1',
        10,
      ),
      course: null,
      attendance: 0,
      enrolled: false,
      isAdmin: false,
      isTeacher: true,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Teacher2',
      lastName: 'Two',
      email: 'teacher2@gmail.com',
      password: await bcrypt.hash(
        'imteacher2',
        10,
      ),
      course: null,
      attendance: 0,
      enrolled: false,
      isAdmin: false,
      isTeacher: true,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'student1',
      lastName: 'Onestudent',
      email: 'student1@gmail.com',
      password: await bcrypt.hash(
        'imstudent1',
        10,
      ),
      course: null,
      attendance: 0,
      enrolled: false,
      isAdmin: false,
      isTeacher: false,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'student2',
      lastName: 'Twostudent',
      email: 'student2@gmail.com',
      password: await bcrypt.hash(
        'imstudent2',
        10,
      ),
      course: null,
      attendance: 0,
      enrolled: false,
      isAdmin: false,
      isTeacher: false,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  },
};
