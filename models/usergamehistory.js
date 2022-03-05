'use strict'
const { Model } = require('sequelize')
const asyncHandler = require('express-async-handler')

module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserGame }) {
      // define association here
      this.belongsTo(UserGame, {
        foreignKey: {
          name: 'fk_userId_histories',
          allowNull: false,
        },
        targetKey: 'id',
        as: 'user',
      })
    }

    toJSON() {
      return { ...this.get(), id: undefined, fk_userId_histories: undefined }
    }
    static addScore = asyncHandler(async ({ uuid, score }) => {
      const user = await sequelize.models.UserGame.findOne({
        where: { uuid },
      })
      const userId = user.id
      return this.create({
        user_uuid: uuid,
        fk_userId_histories: userId,
        score: +score,
      })
    })
  }
  UserGameHistory.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      fk_userId_histories: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_uuid: DataTypes.STRING,
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validValue(value) {
          if (value !== 1 || value !== -1 || value !== 0) {
            throw new Error('Only value -1, 0, 1 are allowed')
          }
        },
      },
    },
    {
      sequelize,
      tableName: 'user_game_histories',
      modelName: 'UserGameHistory',
    }
  )
  return UserGameHistory
}
