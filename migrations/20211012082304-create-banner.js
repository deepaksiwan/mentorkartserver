'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Banners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      banner_bg_color: {
        type: Sequelize.STRING
      },
      banner_image: {
        type: Sequelize.STRING
      },
      banner_title: {
        type: Sequelize.STRING
      },
      banner_title_color: {
        type: Sequelize.STRING
      },
      button: {
        type: Sequelize.INTEGER
      },
      button_text: {
        type: Sequelize.STRING
      },
      button_action_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Banners');
  }
};