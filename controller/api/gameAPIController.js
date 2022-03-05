const asyncHandler = require('express-async-handler')
const { Room } = require('../../models')
const { findWinner } = require('../../utils/gameHandler')

exports.createRoomController = asyncHandler(async (req, res) => {
  const { name } = req.body
  const room = await Room.create({
    name,
    p1_uuid: req.user.uuid,
  })
  return res.status(201).json(room)
})

exports.joinRoomController = asyncHandler(async (req, res) => {
  const { room_name } = req.body
  const expectedRoom = await Room.findOne({ where: { name: room_name } })
  if (!expectedRoom) return res.status(404).json({ message: 'Room not found' })

  expectedRoom.p2_uuid = req.user.uuid
  await expectedRoom.save()
  res.status(200).json({
    message: `Successfully joined ${room_name}`,
    ...expectedRoom.dataValues,
  })
})

exports.fightController = asyncHandler(async (req, res) => {
  const { room_name, hands } = req.body
  const expectedRoom = await Room.findOne({ where: { name: room_name } })
  if (!expectedRoom) return res.status(404).json({ message: 'Room not found' })

  if (
    expectedRoom.p1_uuid !== req.user.uuid &&
    expectedRoom.p2_uuid !== req.user.uuid
  ) {
    return res.status(404).json({ message: 'Player UUID missmatch' })
  }

  whichPlayer = ''
  if (expectedRoom.p1_uuid === req.user.uuid) {
    expectedRoom.p1_hands = JSON.stringify(hands)
    whichPlayer = 'Player 1'
    await expectedRoom.save()
  }
  if (expectedRoom.p2_uuid === req.user.uuid) {
    expectedRoom.p2_hands = JSON.stringify(hands)
    whichPlayer = 'Player 2'
    await expectedRoom.save()
  }

  res.status(201).json({
    message: `Successfully added ${JSON.stringify(hands)} to ${whichPlayer}`,
  })
})

exports.resultController = asyncHandler(async (req, res) => {
  const roomUuid = req.params.uuid
  const expectedRoom = await Room.findOne({ where: { uuid: roomUuid } })

  if (!expectedRoom) return res.status(404).json({ message: 'Room not found' })

  let { p1_hands, p2_hands } = expectedRoom
  if (!p1_hands || p1_hands === '' || !p2_hands || p2_hands === '') {
    res
      .status(404)
      .json({ message: "Player 1 or Player 2 haven't pick their hands" })
  }

  p1_hands = JSON.parse(p1_hands)
  p2_hands = JSON.parse(p2_hands)

  winner = 0
  p1_hands.forEach((p1_hand, index) => {
    winner += findWinner(p1_hand, p2_hands[index])
  })

  score = winner
  player = winner > 0 ? 'Player 1' : 'Player 2'
  winner = winner > 0 ? expectedRoom.p1_uuid : expectedRoom.p2_uuid

  expectedRoom.winner_uuid = winner
  await expectedRoom.save()
  res.json({ score, player, winner })
})
