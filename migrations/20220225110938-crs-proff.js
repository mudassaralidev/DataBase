"use strict";

module.exports = {
  async up(queryInterface, dataTypes) {
    return queryInterface.createTable("crs-proff", {
      crsId: {
        type: dataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "id",
        },
      },
      proffId: {
        type: dataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "professors",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("crs-proff");
  },
};
