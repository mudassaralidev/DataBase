"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn("professors", "depCode", {
      type: Sequelize.INTEGER,
      references: {
        model: "department",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("professors", "depCode");
  },
};
