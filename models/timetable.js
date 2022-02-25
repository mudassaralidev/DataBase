"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TimeTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Section }) {
      this.belongsTo(Section, { foreignKey: "tableId" });
    }
  }
  TimeTable.init(
    {
      Timetable: DataTypes.BLOB,
    },
    {
      sequelize,
      tableName: "TimeTable",
      modelName: "TimeTable",
    }
  );
  return TimeTable;
};
