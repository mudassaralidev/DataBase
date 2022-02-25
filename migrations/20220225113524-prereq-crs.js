"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.createTable("prereq-crs", {
      crsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "id",
        },
      },
      prereqId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "prerequisites",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
