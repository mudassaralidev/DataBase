"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.createTable("sec-stu", {
      stuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "students",
          key: "id",
        },
      },
      secId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "sections",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sec-stu");
  },
};
