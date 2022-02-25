"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.addColumn("sections", "tableId", {
      type: DataTypes.INTEGER,
      // allowNull: false,
      refernces: {
        model: "TimeTable",
        key: "id",
      },
    });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.removeColumn("sections", "tableId");
  },
};
