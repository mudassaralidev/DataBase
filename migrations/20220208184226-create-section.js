"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("sections", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      SecName: {
        type: DataTypes.STRING,
      },
      SecTime: {
        type: DataTypes.FLOAT,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sections");
  },
};
