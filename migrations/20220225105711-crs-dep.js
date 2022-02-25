"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.addColumn("courses", "depCode", {
      type: DataTypes.INTEGER,
      references: {
        model: "department",
        key: "id",
      },
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("courses", "depCode");
  },
};
