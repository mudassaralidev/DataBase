"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Student, Professor, Course }) {
      this.hasMany(Student, { foreignKey: "depCode", as: "student" });
      this.hasMany(Course, { foreignKey: "depCode", as: "course" });
      this.hasMany(Professor, { foreignKey: "depCode", as: "professor" });
    }
  }
  Department.init(
    {
      depName: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "department",
      modelName: "Department",
    }
  );
  return Department;
};
