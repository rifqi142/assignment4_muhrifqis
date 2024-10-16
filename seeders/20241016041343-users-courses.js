"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("users_courses", [
      {
        // user dengan id 1 mengambil matkul web development
        uc_us_id: 1,
        uc_cr_id: 1,
      },
      {
        // user dengan id 1 mengambil matkul mobile development
        uc_us_id: 1,
        uc_cr_id: 2,
      },
      {
        // user dengan id 2 mengambil matkul data science
        uc_us_id: 2,
        uc_cr_id: 3,
      },
      {
        // user dengan id 2 mengambil matkul machine learning
        uc_us_id: 2,
        uc_cr_id: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("users_courses", null, {});
  },
};
