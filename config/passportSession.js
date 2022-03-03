const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { UserGame } = require('../models')

async function authenticate(email, password, done) {
  try {
    const user = await UserGame.authenticate({ email, password })
    return done(null, user)
  } catch (err) {
    return done(null, false, { message: err.message })
  }
}

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    authenticate
  )
)

passport.serializeUser((user, done) => done(null, user.uuid))
passport.deserializeUser(async (id, done) =>
  done(null, await UserGame.findOne({ where: { uuid: id } }))
)

module.exports = passport
