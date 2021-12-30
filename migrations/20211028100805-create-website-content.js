'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WebsiteContents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      showcase_section_heading: {
        type: Sequelize.STRING,
      },
      showcase_section_text: {
        type: Sequelize.STRING,
      },
      packages_section_heading: {
        type: Sequelize.STRING,
      },
      packages_section_text: {
        type: Sequelize.STRING,
      },
      find_mentors_section_span: {
        type: Sequelize.STRING,
      },
      find_mentors_section_heading: {
        type: Sequelize.STRING,
      },
      find_mentors_section_subheading: {
        type: Sequelize.STRING,
      },
      find_mentors_section_text: {
        type: Sequelize.STRING,
      },
      join_section_span: {
        type: Sequelize.STRING,
      },
      join_section_heading: {
        type: Sequelize.STRING,
      },
      join_section_subheading: {
        type: Sequelize.STRING,
      },
      join_section_text: {
        type: Sequelize.STRING,
      },
      programs_section_heading: {
        type: Sequelize.STRING,
      },
      programs_section_text: {
        type: Sequelize.STRING,
      },
      subscription_section_span: {
        type: Sequelize.STRING,
      },
      subscription_section_heading: {
        type: Sequelize.STRING,
      },
      partners_section_heading: {
        type: Sequelize.STRING,
      },
      testimonials_section_span: {
        type: Sequelize.STRING,
      },
      testimonials_section_heading: {
        type: Sequelize.STRING,
      },
      testimonials_section_subheading: {
        type: Sequelize.STRING,
      },
      testimonials_section_text: {
        type: Sequelize.STRING,
      },
      news_section_heading: {
        type: Sequelize.STRING,
      },
      blogs_section_span: {
        type: Sequelize.STRING,
      },
      blogs_section_heading: {
        type: Sequelize.STRING,
      },
      blogs_section_text: {
        type: Sequelize.STRING,
      },
      organistations_section_heading: {
        type: Sequelize.STRING,
      },
      youtube_videos_section_span: {
        type: Sequelize.STRING,
      },
      youtube_videos_section_heading: {
        type: Sequelize.STRING,
      },
      brand_videos_section_span: {
        type: Sequelize.STRING,
      },
      brand_videos_section_heading: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('WebsiteContents');
  },
};
