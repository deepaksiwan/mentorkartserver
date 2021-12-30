'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blog_title: {
        type: Sequelize.STRING
      },
      blog_content: {
        type: Sequelize.TEXT
      },
      blog_tag: {
        type: Sequelize.STRING
      },
      blog_bg: {
        type: Sequelize.STRING
      },
      blog_author: {
        type: Sequelize.STRING
      },
      blog_date: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('Blogs');
  }
};