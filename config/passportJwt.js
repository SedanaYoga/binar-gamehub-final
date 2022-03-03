const passport = require('passport')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const { UserGame } = require('../models')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const options = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET_JWT,
}

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      const user = await UserGame.findOne({ where: { uuid: payload.id } })
      done(null, user)
    } catch (err) {
      done(err, false)
    }
  })
)

module.exports = passport
