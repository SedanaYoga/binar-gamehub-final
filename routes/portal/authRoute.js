const router = require('express').Router()
const { signUpController } = require('../../controller/portal/authController')

// SignUp
router.get('/signup', (req, res) =>
  res.render('signinupView', { title: 'Sign Up' })
)
router.post('/signup', signUpController)

module.exports = router
