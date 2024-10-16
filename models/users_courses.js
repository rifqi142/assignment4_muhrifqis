"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi many to many ke tabel courses
      models.users_courses.belongsTo(models.user, {
        foreignKey: "uc_us_id",
        as: "user",
      });

      // relasi many to many ke tabel user
      models.users_courses.belongsTo(models.courses, {
        foreignKey: "uc_cr_id",
        as: "course",
      });
    }
  }
  users_courses.init(
    {
      uc_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uc_us_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      uc_cr_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "users_courses",
      tableName: "users_courses",
    }
  );
  return users_courses;
};
