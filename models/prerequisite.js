"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prerequisite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Course }) {
      this.belongsToMany(Course, { through: "prereq-crs" });
    }
  }
  prerequisite.init(
    {
      prereqName: { types: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "prerequisites",
      modelName: "Prerequisite",
    }
  );
  return Prerequisite;
};
