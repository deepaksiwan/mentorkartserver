'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SocialLinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      facebook_link: {
        type: Sequelize.STRING
      },
      facebook_link_enabled: {
        type: Sequelize.STRING
      },
      twitter_link: {
        type: Sequelize.STRING
      },
      twitter_link_enabled: {
        type: Sequelize.STRING
      },
      linkedin_link: {
        type: Sequelize.STRING
      },
      linkedin_link_enabled: {
        type: Sequelize.STRING
      },
      youtube_link: {
        type: Sequelize.STRING
      },
      youtube_link_enabled: {
        type: Sequelize.STRING
      },
      instagram_link: {
        type: Sequelize.STRING
      },
      instagram_link_enabled: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.INTEGER
      },
      email_address: {
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
    await queryInterface.dropTable('SocialLinks');
  }
};