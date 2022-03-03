const router = require('express').Router()
const { restrict } = require('../../middleware/authMiddleware')
const {
  renderProfileController,
} = require('../../controller/portal/profileController.js')

router.get('/profile/:uuid', restrict, renderProfileController)

module.exports = router
