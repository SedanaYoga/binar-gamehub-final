const router = require('express').Router()
const { restrict } = require('../../middleware/authMiddleware')
const {
  renderUpdateController,
  updateUserController,
} = require('../../controller/portal/updateController')

router.get('/update/:uuid', restrict, renderUpdateController)
router.post('/update/:uuid', restrict, updateUserController)

module.exports = router
