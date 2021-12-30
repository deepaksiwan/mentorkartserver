'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Banner.init({
    banner_bg_color: DataTypes.STRING,
    banner_image: DataTypes.STRING,
    banner_title: DataTypes.STRING,
    banner_title_color: DataTypes.STRING,
    button: DataTypes.INTEGER,
    button_text: DataTypes.STRING,
    button_action_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Banner',
  });
  return Banner;
};