"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi many to many ke tabel courses
      // relasi many to many ke tabel user
      // satu user bisa mempunyai banyak course
      models.user.belongsToMany(models.courses, {
        through: models.users_courses,
        foreignKey: "uc_us_id",
        otherKey: "uc_cr_id",
        as: "enrolledCourses",
      });
    }
  }
  user.init(
    {
      us_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      us_username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      us_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
