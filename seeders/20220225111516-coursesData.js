"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          crsTitle: "SE",
          crsCreedit: 3,
          crsDescription: "this is another course",
          depCode: 7,
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
        {
          crsTitle: "OOP",
          crsCreedit: 3,
          crsDescription: "this is another course",
          depCode: 8,
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
        {
          crsTitle: "DataBase",
          crsCreedit: 3,
          crsDescription: "this is another course",
          depCode: 8,
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
