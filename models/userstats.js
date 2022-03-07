'use strict'
const { Model } = require('sequelize')
const asyncHandler = require('express-async-handler')

module.exports = (sequelize, DataTypes) => {
  class UserStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserGame }) {
      // define association here
      // userId
      this.belongsTo(UserGame, {
        foreignKey: {
          name: 'fk_userId_stats',
          allowNull: false,
        },
        targetKey: 'id',
        as: 'user',
      })
    }
    // To Hide the Id value in Sequelize in user facing
    toJSON() {
      return { ...this.get(), fk_userId_stats: undefined }
    }

    static addWinComp = asyncHandler(async (uuid) => {
      const userStat = await this.findOne({
        where: { user_uuid: uuid },
      })
      userStat.win_count_comp += 1
      await userStat.save()
    })

    static addLoseComp = asyncHandler(async (uuid) => {
      const userStat = await this.findOne({
        where: { user_uuid: uuid },
      })
      userStat.lose_count_comp += 1
      await userStat.save()
    })

    static addDrawComp = asyncHandler(async (uuid) => {
      const userStat = await this.findOne({
        where: { user_uuid: uuid },
      })
      userStat.draw_count_comp += 1
      await userStat.save()
    })

    static addWinPlayer = asyncHandler(async (uuid) => {
      const userStat = await this.findOne({
        where: { user_uuid: uuid },
      })
      userStat.win_count_player += 1
      await userStat.save()
    })

    static addLosePlayer = asyncHandler(async (uuid) => {
      const userStat = await this.findOne({
        where: { user_uuid: uuid },
      })
      userStat.lose_count_player += 1
      await userStat.save()
    })

    static addDrawPlayer = asyncHandler(async (uuid) => {
      const userStat = await this.findOne({
        where: { user_uuid: uuid },
      })
      userStat.draw_count_player += 1
      await userStat.save()
    })
  }

  UserStats.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_uuid: DataTypes.STRING,
      fk_userId_stats: DataTypes.INTEGER,
      win_count_comp: DataTypes.INTEGER,
      lose_count_comp: DataTypes.INTEGER,
      draw_count_comp: DataTypes.INTEGER,
      win_count_player: DataTypes.INTEGER,
      lose_count_player: DataTypes.INTEGER,
      draw_count_player: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: 'user_stats',
      modelName: 'UserStats',
    }
  )
  return UserStats
}
