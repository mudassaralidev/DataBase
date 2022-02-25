"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.createTable("crs-stu", {
      stuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "students",
          key: "id",
        },
      },
      crsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("crs-stu");
  },
};
