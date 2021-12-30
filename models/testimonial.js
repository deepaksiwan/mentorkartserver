'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testimonial.init(
    {
      testimonial_image: DataTypes.STRING,
      text: DataTypes.TEXT,
      author: DataTypes.STRING,
      post: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Testimonial',
    }
  );
  return Testimonial;
};
