const asyncHandler = require('express-async-handler')
const { UserGameHistory, UserStats, UserGame } = require('../../models')

exports.renderRPSGamePage = (req, res) => {
  const username = req.user.dataValues.username
  res.render('rpsGameView', { title: 'RPS Game', username })
}

exports.addHistoryController = asyncHandler(async (req, res) => {
  let { score } = req.body
  const { uuid } = req.user.dataValues
  score = +score
  await UserGameHistory.addScore({
    uuid,
    score: score,
  })

  if (score > 0) {
    await UserStats.addWinComp(uuid)
  } else if (score < 0) {
    await UserStats.addLoseComp(uuid)
  } else {
    await UserStats.addDrawComp(uuid)
  }

  return res.status(200).json({ message: 'Successfully added score!' })
})

exports.renderLeaderboardPlayer = asyncHandler(async (req, res) => {
  const userWithStats = await UserGame.findAll({
    include: ['stats'],
    order: [['stats', 'win_count_player', 'DESC']],
    limit: 5,
  })
  res.render('leaderboardView', {
    title: 'Leaderboard VS Player',
    userWithStats,
  })
})

exports.renderLeaderboardComp = asyncHandler(async (req, res) => {
  const userWithStats = await UserGame.findAll({
    include: ['stats'],
    order: [['stats', 'win_count_comp', 'DESC']],
    limit: 5,
  })
  res.render('leaderboardView', { title: 'Leaderboard VS Comp', userWithStats })
})
