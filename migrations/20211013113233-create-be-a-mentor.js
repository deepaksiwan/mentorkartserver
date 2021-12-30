'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BeAMentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mobile_number: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      linked_in: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      full_address: {
        type: Sequelize.STRING
      },
      interests: {
        type: Sequelize.STRING
      },
      whom_to_mentor: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      other_industry: {
        type: Sequelize.STRING
      },
      first_pref: {
        type: Sequelize.STRING
      },
      second_pref: {
        type: Sequelize.STRING
      },
      third_pref: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      get_to_know: {
        type: Sequelize.STRING
      },
      othergetToKnow: {
        type: Sequelize.STRING
      },
      grad_college:{
        type: Sequelize.STRING
      },
      grad_degree:{
        type: Sequelize.STRING
      },
      grad_year:{
        type: Sequelize.STRING
      },
      post_grad_college:{
        type: Sequelize.STRING
      },
      post_grad_degree:{
        type: Sequelize.STRING
      },
      post_grad_year:{
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
    await queryInterface.dropTable('BeAMentors');
  }
};