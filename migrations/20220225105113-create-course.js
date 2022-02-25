"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      crsTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      crsCreedit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      crsDescription: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable("courses");
  },
};
