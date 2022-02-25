"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "crs-stu",
      [
        {
          crsId: 2,
          stuId: 87,
        },
        {
          crsId: 2,
          stuId: 89,
        },
        {
          crsId: 6,
          stuId: 90,
        },
        {
          crsId: 10,
          stuId: 90,
        },
        {
          crsId: 9,
          stuId: 92,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("crs-stu", null, {});
  },
};
