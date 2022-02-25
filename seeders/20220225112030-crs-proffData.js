"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "crs-proff",
      [
        {
          crsId: 1,
          proffId: 79,
        },
        {
          crsId: 4,
          proffId: 79,
        },
        {
          crsId: 2,
          proffId: 68,
        },
        {
          crsId: 2,
          proffId: 79,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("crs-proff", null, {});
  },
};
