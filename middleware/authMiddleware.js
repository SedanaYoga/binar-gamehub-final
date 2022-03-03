const passportJwt = require('../config/passportJwt')

exports.restrict = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/signin')
}

exports.restrictJwt = passportJwt.authenticate('jwt', {
  session: false,
})
