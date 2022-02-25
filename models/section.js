"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Professor, Student, TimeTable }) {
      this.belongsToMany(Professor, { through: "sec-proff" });
      this.belongsToMany(Student, { through: "sec-stu" });
      this.hasOne(TimeTable, { foreignKey: "tableId" });
    }

    // toJSON() {
    //   return { ...this.get(), id: undefined };
    // }
  }
  Section.init(
    {
      SecName: { type: DataTypes.STRING, allowNull: false },
      SecTime: DataTypes.FLOAT,
    },
    {
      sequelize,
      tableName: "sections",
      modelName: "Section",
    }
  );
  return Section;
};
