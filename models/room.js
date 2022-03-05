'use strict'
const { Model } = require('sequelize')
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
    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  Room.init(
    {
      name: { type: DataTypes.STRING, unique: true },
      uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      p1_uuid: DataTypes.STRING,
      p2_uuid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      p1_hands: DataTypes.STRING,
      p2_hands: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'rooms',
      modelName: 'Room',
    }
  )
  return Room
}
