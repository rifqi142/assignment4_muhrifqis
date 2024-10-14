"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class courses_schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // A schedule can have many courses
      // relasi one to many ke tabel courses
      models.courses_schedules.belongsTo(models.courses, {
        foreignKey: "cs_cr_id",
        as: "course",
      });
    }
  }
  courses_schedules.init(
    {
      cs_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cs_cr_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cs_sc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cs_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      cs_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "courses_schedules",
    }
  );
  return courses_schedules;
};
