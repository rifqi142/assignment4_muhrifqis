"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("courses_schedules", {
      cs_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cs_cr_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "cr_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      cs_sc_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "schedules",
          key: "sc_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      cs_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      cs_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.addIndex("courses_schedules", ["cs_cr_id"]);
    await queryInterface.addIndex("courses_schedules", ["cs_sc_id"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("courses_schedules", ["cs_cr_id"]);
    await queryInterface.removeIndex("courses_schedules", ["cs_sc_id"]);

    await queryInterface.dropTable("courses_schedules");
  },
};
