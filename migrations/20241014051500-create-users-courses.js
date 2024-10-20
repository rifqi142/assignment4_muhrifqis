"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users_courses", {
      uc_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uc_us_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "us_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      uc_cr_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "cr_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      uc_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      uc_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.addIndex("users_courses", ["uc_us_id"]);
    await queryInterface.addIndex("users_courses", ["uc_cr_id"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("users_courses", ["uc_us_id"]);
    await queryInterface.removeIndex("users_courses", ["uc_cr_id"]);

    await queryInterface.dropTable("users_courses");
  },
};
