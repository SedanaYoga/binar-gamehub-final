'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserGameHistory, UserStats, UserGameBiodata }) {
      // define association here
      this.hasMany(UserGameHistory, {
        foreignKey: 'fk_userId_histories',
        as: 'histories',
      })
      this.hasOne(UserGameBiodata, {
        foreignKey: 'fk_userId_biodata',
        as: 'biodata',
      })
      this.hasOne(UserStats, {
        foreignKey: 'fk_userId_stats',
        as: 'stats',
      })
    }
    // To Hide the Id value in Sequelize in user facing
    toJSON() {
      return { ...this.get(), id: undefined }
    }

    // Session - Portal

    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    static signUp = ({ password, ...otherAttributes }) => {
      const encryptedPassword = this.#encrypt(password)
      return this.create({ password: encryptedPassword, ...otherAttributes })
    }

    checkPassword = (password) => bcrypt.compareSync(password, this.password)

    static authenticate = asyncHandler(async ({ email, password }) => {
      const user = await this.findOne({ where: { email } })
      if (!user) throw new Error('Account you inputted does not exist')
      const isPasswordValid = user.checkPassword(password)
      if (!isPasswordValid)
        throw new Error('Please input the correct password!')
      return Promise.resolve(user)
    })

    // JWT - API
    generateToken = () => {
      const payload = {
        id: this.uuid,
        username: this.username,
      }
      const secret = process.env.SECRET_JWT
      const token = jwt.sign(payload, secret)
      return token
    }
  }

  UserGame.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'username is required' },
          notEmpty: { msg: 'username must not be empty' },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'email is required' },
          notEmpty: { msg: 'email must not be empty' },
          isEmail: { msg: 'must be a valid email address' },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'password is required' },
          notEmpty: { msg: 'password must not be empty' },
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'user_games',
      modelName: 'UserGame',
    }
  )
  return UserGame
}
