"use strict";
module.exports = {
  async up(queryInterface, DataTtpes) {
    await queryInterface.createTable("prerequisites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTtpes.INTEGER,
      },
      prereqName: {
        type: DataTtpes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTtpes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTtpes.DATE,
      },
    });
  },
  async down(queryInterface, DataTtpes) {
    await queryInterface.dropTable("prerequisites");
  },
};
