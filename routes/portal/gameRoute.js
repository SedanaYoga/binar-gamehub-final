const router = require('express').Router()
const { restrict } = require('../../middleware/authMiddleware')
const {
  renderRPSGamePage,
  addHistoryController,
  renderLeaderboardComp,
  renderLeaderboardPlayer,
} = require('../../controller/portal/gameController.js')

router.get('/game', restrict, renderRPSGamePage)
router.post('/histories', restrict, addHistoryController)
router.get('/leaderboard/vscomp', restrict, renderLeaderboardComp)
router.get('/leaderboard/vsplayer', restrict, renderLeaderboardPlayer)

module.exports = router
