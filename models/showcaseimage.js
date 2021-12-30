'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShowcaseImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ShowcaseImage.init({
    image: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShowcaseImage',
  });
  return ShowcaseImage;
};