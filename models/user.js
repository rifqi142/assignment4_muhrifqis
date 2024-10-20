"user strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here

      // Relasi many-to-many ke tabel courses
      models.user.belongsToMany(models.courses, {
        through: models.users_courses,
        foreignKey: "uc_us_id",
        otherKey: "uc_cr_id",
        as: "enrolledCourses",
      });

      models.user.hasMany(models.users_courses, {
        foreignKey: "uc_us_id",
        as: "userCourses",
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
        unique: true,
      },
      us_fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      us_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      us_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
      tableName: "users",
      timestamps: true,
      createdAt: "us_created_at",
      updatedAt: "us_updated_at",
    }
  );
  return user;
};
