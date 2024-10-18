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
    return queryInterface.bulkInsert("courses", [
      {
        cr_id: 1,
        cr_name: "Web Development",
        cr_code: "WD",
        cr_description: "Learn how to build a website",
        cr_trainer: "Muhammad Ali",
        cr_price: 500000,
        cr_duration: 12,
        cr_category: "IT, Programming, Web Development",
        cr_created_at: new Date(),
        cr_updated_at: new Date(),
      },
      {
        cr_id: 2,
        cr_name: "Mobile Development",
        cr_code: "MD",
        cr_description: "Learn how to build a mobile application",
        cr_trainer: "Muhammad Ikhsan",
        cr_price: 450000,
        cr_duration: 8,
        cr_category: "IT, Programming, Mobile Development",
        cr_created_at: new Date(),
        cr_updated_at: new Date(),
      },
      {
        cr_id: 3,
        cr_name: "Data Science",
        cr_code: "DS",
        cr_description: "Learn how to analyze data",
        cr_trainer: "Fadlan Amrullah",
        cr_price: 600000,
        cr_duration: 10,
        cr_category: "IT, Programming, Data Science",
        cr_created_at: new Date(),
        cr_updated_at: new Date(),
      },
      {
        cr_id: 4,
        cr_name: "Machine Learning",
        cr_code: "ML",
        cr_description: "Learn how to build a machine learning model",
        cr_trainer: "Darwin Prakoso",
        cr_price: 700000,
        cr_duration: 15,
        cr_category: "IT, Programming, Machine Learning",
        cr_created_at: new Date(),
        cr_updated_at: new Date(),
      },
      {
        cr_id: 5,
        cr_name: "Artificial Intelligence",
        cr_code: "AI",
        cr_description: "Learn how to build an AI model",
        cr_trainer: "Satria Ramadhan",
        cr_price: 800000,
        cr_duration: 20,
        cr_category: "IT, Programming, Artificial Intelligence",
        cr_created_at: new Date(),
        cr_updated_at: new Date(),
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
    return queryInterface.bulkDelete("courses", null, {});
  },
};
