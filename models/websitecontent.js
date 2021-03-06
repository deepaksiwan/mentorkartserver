'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WebsiteContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WebsiteContent.init(
    {
      field_name: DataTypes.STRING,
      field_data: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'WebsiteContent',
    }
  );
  return WebsiteContent;
};
