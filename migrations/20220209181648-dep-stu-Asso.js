"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "students", // name of Source model
      "depCode", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "department", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      "students", // name of Source model
      "depCode" // key we want to remove
    );
  },
};
