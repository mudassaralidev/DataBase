"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sec-proff",
      [
        {
          secId: "48",
          proffId: "68",
        },
        {
          secId: "49",
          proffId: "68",
        },
        {
          secId: "49",
          proffId: "69",
        },
        {
          secId: "48",
          proffId: "70",
        },
        {
          secId: "47",
          proffId: "69",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sec-proff", null, {});
  },
};
