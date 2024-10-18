"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // A schedule can have many courses
      // models.schedules.belongsToMany(models.courses, {
      //   through: models.courses_schedules,
      //   foreignKey: "cs_sc_id",
      //   otherKey: "cs_cr_id",
      //   as: "courses",
      // });

      // A schedule can have many courses
      models.schedules.belongsTo(models.schedules, {
        foreignKey: "cs_cr_id",
        as: "schedules",
      });

      // A course can have many schedules
      models.schedules.belongsTo(models.courses, {
        foreignKey: "cs_sc_id",
        as: "courses",
      });
    }
  }
  schedules.init(
    {
      sc_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      sc_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sc_start_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      sc_end_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      sc_is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      sc_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      sc_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "schedules",
      tableName: "schedules",
    }
  );
  return schedules;
};
