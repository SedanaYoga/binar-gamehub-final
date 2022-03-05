const router = require('express').Router()
const { restrictJwt } = require('../../middleware/authMiddleware')
const {
  createRoomController,
  joinRoomController,
  fightController,
  resultController,
} = require('../../controller/api/gameAPIController.js')

router.post('/api/v1/game/room', restrictJwt, createRoomController)
router.post('/api/v1/game/join', restrictJwt, joinRoomController)
router.post('/api/v1/game/hands', restrictJwt, fightController)
router.get('/api/v1/game/result/:uuid', restrictJwt, resultController)

module.exports = router
