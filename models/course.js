"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Department, Professor, Prerequisite, Student }) {
      this.belongsTo(Department, { foreignKey: "depCode", as: "department" });
      this.belongsToMany(Professor, { through: "crs-proff" });
      this.belongsToMany(Prerequisite, { through: "prereq-crs" });
      this.belongsToMany(Student, { through: "crs-stu" });
    }
  }
  Course.init(
    {
      crsTitle: { type: DataTypes.STRING, allowNull: false },
      crsCreedit: { type: DataTypes.INTEGER, allowNull: false },
      crsDescription: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "courses",
      modelName: "Course",
    }
  );
  return Course;
};
