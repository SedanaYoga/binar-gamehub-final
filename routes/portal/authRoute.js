const router = require('express').Router()
const {
  signUpController,
  signInController,
  whoami,
  signOutController,
} = require('../../controller/portal/authController')
const { restrict } = require('../../middleware/authMiddleware')

// SignUp
router.get('/signup', (req, res) =>
  res.render('signinupView', { title: 'Sign Up' })
)
router.post('/signup', signUpController)

//SignIn
router.get('/signin', (req, res) => {
  let error = ''
  res.render('signinupView', { title: 'Sign In', error })
})
router.post('/signin', signInController)

//WhoAmI
router.get('/whoami', restrict, whoami)

//SignOut
router.get('/logout', restrict, signOutController)

module.exports = router
