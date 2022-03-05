const asyncHandler = require('express-async-handler')
const { Room } = require('../../models')

exports.createRoomController = asyncHandler(async (req, res) => {
  const { name } = req.body
  const room = await Room.create({
    name,
    p1_id: req.user.id,
  })
  return res.status(201).json(room)
})

exports.joinRoomController = asyncHandler(async (req, res) => {})

exports.fightController = asyncHandler(async (req, res) => {})
