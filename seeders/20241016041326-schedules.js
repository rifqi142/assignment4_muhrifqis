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
    return queryInterface.bulkInsert("schedules", [
      {
        sc_id: 1,
        sc_date: "2024-10-16",
        sc_start_time: "08:00:00",
        sc_end_time: "10:00:00",
        sc_is_active: true,
        sc_created_at: new Date(),
        sc_updated_at: new Date(),
      },
      {
        sc_id: 2,
        sc_date: "2024-10-16",
        sc_start_time: "10:00:00",
        sc_end_time: "12:00:00",
        sc_is_active: true,
        sc_created_at: new Date(),
        sc_updated_at: new Date(),
      },
      {
        sc_id: 3,
        sc_date: "2024-10-16",
        sc_start_time: "13:00:00",
        sc_end_time: "15:00:00",
        sc_is_active: true,
        sc_created_at: new Date(),
        sc_updated_at: new Date(),
      },
      {
        sc_id: 4,
        sc_date: "2024-10-16",
        sc_start_time: "15:00:00",
        sc_end_time: "17:00:00",
        sc_is_active: true,
        sc_created_at: new Date(),
        sc_updated_at: new Date(),
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
    return queryInterface.bulkDelete("schedules", null, {});
  },
};
