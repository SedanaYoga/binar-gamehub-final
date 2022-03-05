const asyncHandler = require('express-async-handler')
const { UserGameHistory } = require('../../models')

exports.renderRPSGamePage = (req, res) => {
  const username = req.user.dataValues.username
  res.render('rpsGameView', { title: 'RPS Game', username })
}

exports.addHistoryController = asyncHandler(async (req, res) => {
  const { score } = req.body
  await UserGameHistory.addScore({
    uuid: req.user.dataValues.uuid,
    score: +score,
  })

  return res.status(200).json({ message: 'Successfully added score!' })
})
