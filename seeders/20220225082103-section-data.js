"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sections",
      [
        {
          SecName: "Section A",
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
        {
          SecName: "Section B",
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
        {
          SecName: "Section C",
          createdAt: "2022-02-10T06:24:46.780Z",
          updatedAt: "2022-02-10T06:24:46.780Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sections", null, {});
  },
};
