const router = require('express').Router()
const { restrict } = require('../../middleware/authMiddleware')
const {
  renderRPSGamePage,
  addHistoryController,
} = require('../../controller/portal/gameController.js')

router.get('/game', restrict, renderRPSGamePage)
router.post('/histories', restrict, addHistoryController)

module.exports = router
