"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sec-stu",
      [
        {
          secId: 47,
          stuId: 87,
        },
        {
          secId: 47,
          stuId: 89,
        },
        {
          secId: 48,
          stuId: 90,
        },
        {
          secId: 50,
          stuId: 90,
        },
        {
          secId: 55,
          stuId: 92,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sec-crs", null, {});
  },
};
