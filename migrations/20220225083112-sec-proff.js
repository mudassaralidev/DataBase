"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.createTable("sec-proff", {
      secId: {
        allowNull: false,
        type: DataTypes.INTEGER,

        references: {
          model: "sections",
          key: "id",
        },
      },
      proffId: {
        type: DataTypes.INTEGER,

        references: {
          model: "professors",
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, DataTypes) {
    return queryInterface.dropTable("sec-proff");
  },
};
