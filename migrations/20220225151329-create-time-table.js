"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("TimeTables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Timetable: {
        type: DataTypes.BLOB,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("TimeTables");
  },
};
