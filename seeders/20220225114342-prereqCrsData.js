"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "prereq-crs",
      [
        {
          crsId: 2,
          prereqId: 2,
        },
        {
          crsId: 4,
          prereqId: 2,
        },
        {
          crsId: 6,
          prereqId: 4,
        },
        {
          crsId: 10,
          prereqId: 4,
        },
        {
          crsId: 9,
          prereqId: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("prereq-crs", null, {});
  },
};
