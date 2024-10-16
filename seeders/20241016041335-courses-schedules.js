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
    return queryInterface.bulkInsert(
      "courses_schedules",
      [
        {
          // matkul web development dijadwalkan
          // pada tanggal 2024-10-16 pukul 08:00:00 - 10:00:00
          cs_cr_id: 1,
          cs_sc_id: 1,
          cs_created_at: new Date(),
          cs_updated_at: new Date(),
        },
        {
          // matkul mobile development dijadwalkan
          // pada tanggal 2024-10-16 pukul 10:00:00 - 12:00:00
          cs_cr_id: 2,
          cs_sc_id: 2,
          cs_created_at: new Date(),
          cs_updated_at: new Date(),
        },
        {
          // matkul data science dijadwalkan
          // pada tanggal 2024-10-16 pukul 13:00:00 - 15:00:00
          cs_cr_id: 3,
          cs_sc_id: 3,
          cs_created_at: new Date(),
          cs_updated_at: new Date(),
        },
        {
          // matkul machine learning dijadwalkan
          // pada tanggal 2024-10-16 pukul 15:00:00 - 17:00:00
          cs_cr_id: 4,
          cs_sc_id: 4,
          cs_created_at: new Date(),
          cs_updated_at: new Date(),
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
    return queryInterface.bulkDelete("courses_schedules", null, {});
  },
};
