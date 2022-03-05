const router = require('express').Router()
const { restrictJwt } = require('../../middleware/authMiddleware')
const {
  createRoomController,
  joinRoomController,
  fightController,
} = require('../../controller/api/gameAPIController.js')

router.post('/api/v1/game/room', restrictJwt, createRoomController)
router.post('/api/v1/game/join', restrictJwt, joinRoomController)
router.post('/api/v1/game/fight', restrictJwt, fightController)

module.exports = router
