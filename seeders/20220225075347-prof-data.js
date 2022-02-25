"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "professors",
      [
        {
          firstName: "Abdul",
          lastName: "Waseh",
          depCode: "7",
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
        {
          firstName: "Mudassar",
          lastName: "Sabir Ali",
          depCode: "8",
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
        {
          firstName: "Mome",
          lastName: "Ghias",
          depCode: "9",
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("professors", null, {});
  },
};
