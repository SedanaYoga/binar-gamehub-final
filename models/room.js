'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Room.init({
    name: DataTypes.STRING,
    p1_id: DataTypes.STRING,
    p2_id: DataTypes.STRING,
    p1_hands: DataTypes.STRING,
    p2_hands: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};