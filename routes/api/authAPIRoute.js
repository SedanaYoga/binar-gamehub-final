const router = require('express').Router()
const {
  signInJWTController,
  whoamiJwt,
} = require('../../controller/api/authAPIController')
const { signUpController } = require('../../controller/portal/authController')
const { restrictJwt } = require('../../middleware/authMiddleware')

router.post('/api/v1/auth/signup', signUpController)
router.post('/api/v1/auth/signin', signInJWTController)
router.get('/api/v1/auth/whoami', restrictJwt, whoamiJwt)

module.exports = router
