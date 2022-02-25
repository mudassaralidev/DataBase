"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Department, Course, Section }) {
      // define association here
      this.belongsTo(Department, { foreignKey: "depCode", as: "department" });
      this.belongsToMany(Course, { through: "crs-stu" });
      this.belongsToMany(Section, { through: "sec-stu" });
    }

    // To hide something when respone is being send
    // toJSON() {
    //   return { ...this.get(), id: undefined };
    // }
  }
  Student.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: /*true*/ { msg: "Student must have name" },
          notEmpty: { msg: "Name cannot be empty" },
          // isEmail: {
          //   msg: "email format should be correct",
          // } /*to verify email format*/,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: /*true*/ { msg: "Student must have name" },
          notEmpty: { msg: "Name cannot be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "students",
      modelName: "Student",
    }
  );
  return Student;
};
