"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("courses", {
      cr_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cr_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cr_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cr_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cr_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cr_duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cr_category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cr_is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      cr_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      cr_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("courses");
  },
};
