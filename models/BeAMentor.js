'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BeAMentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BeAMentor.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_number: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    linked_in: DataTypes.STRING,
    dob: DataTypes.DATE,
    full_address: DataTypes.STRING,
    interests: DataTypes.STRING,
    whom_to_mentor: DataTypes.STRING,
    industry: DataTypes.STRING,
    other_industry: DataTypes.STRING,
    first_pref: DataTypes.STRING,
    second_pref: DataTypes.STRING,
    third_pref: DataTypes.STRING,
    designation: DataTypes.STRING,
    bio: DataTypes.STRING,
    get_to_know: DataTypes.STRING,
    othergetToKnow: DataTypes.STRING,
    grad_college:DataTypes.STRING,
    grad_degree: DataTypes.STRING,
    grad_year:DataTypes.STRING,
    post_grad_college: DataTypes.STRING,
    post_grad_degree: DataTypes.STRING,
    post_grad_year: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'BeAMentor',
  });
  return BeAMentor;
};