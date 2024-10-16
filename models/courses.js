"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // A course can have many students
      // relasi many to many ke tabel user
      models.courses.belongsToMany(models.user, {
        through: models.users_courses,
        foreignKey: "uc_cr_id",
        otherKey: "uc_us_id",
        as: "students",
      });

      // A course can have many schedules
      // relasi one to many ke tabel schedules
      models.courses.hasMany(models.schedules, {
        through: models.courses_schedules,
        foreignKey: "sc_cr_id",
        as: "schedules",
      });
    }
  }
  courses.init(
    {
      cr_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cr_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cr_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cr_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cr_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cr_duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cr_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cr_is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      cr_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      cr_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "courses",
      tableName: "courses",
    }
  );
  return courses;
};
