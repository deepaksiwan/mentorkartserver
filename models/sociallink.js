'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SocialLink.init({
    facebook_link: DataTypes.STRING,
    facebook_link_enabled: DataTypes.STRING,
    twitter_link: DataTypes.STRING,
    twitter_link_enabled: DataTypes.STRING,
    linkedin_link: DataTypes.STRING,
    linkedin_link_enabled: DataTypes.STRING,
    youtube_link: DataTypes.STRING,
    youtube_link_enabled: DataTypes.STRING,
    instagram_link: DataTypes.STRING,
    instagram_link_enabled: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    email_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SocialLink',
  });
  return SocialLink;
};