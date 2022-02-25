"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Department, Section, Course }) {
      this.belongsTo(Department, { foreignKey: "depCode", as: "department" }),
        this.belongsToMany(Section, { through: "sec-proff" });
      this.belongsToMany(Course, { through: "crs-proff" });
    }
  }
  Professor.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "professors",
      modelName: "Professor",
    }
  );
  return Professor;
};
