const asyncHandler = require('express-async-handler')
const findHandler = require('../../utils/findHandler')

exports.renderProfileController = async (req, res) => {
  const paramsUuid = req.params.uuid
  const user = await findHandler(
    'UserGame',
    ['biodata', 'histories'],
    'one',
    paramsUuid
  )
  const winCount = user.histories.filter((e) => e.score > 0).length.toString()
  const loseCount = user.histories.filter((e) => e.score < 0).length.toString()
  const drawCount = user.histories
    .filter((e) => (e.score = 0))
    .length.toString()

  res.render('profileView', { winCount, loseCount, drawCount, user })
}
