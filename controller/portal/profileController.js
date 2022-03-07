const asyncHandler = require('express-async-handler')
const findHandler = require('../../utils/findHandler')

exports.renderProfileController = asyncHandler(async (req, res) => {
  const paramsUuid = req.params.uuid
  const user = await findHandler(
    'UserGame',
    ['biodata', 'histories', 'stats'],
    'one',
    paramsUuid
  )

  res.render('profileView', { user })
})
