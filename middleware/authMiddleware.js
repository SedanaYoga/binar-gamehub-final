const passportJwt = require('../config/passportJwt')

exports.restrict = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/signin')
}

exports.restrictAsAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.dataValues.isAdmin) return next()
  res.redirect('/')
}

exports.restrictJwt = passportJwt.authenticate('jwt', {
  session: false,
})
