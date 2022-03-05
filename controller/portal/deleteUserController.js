const asyncHandler = require('express-async-handler')
const { UserGame, UserGameBiodata } = require('../../models/')

exports.deleteUserController = asyncHandler(async (req, res) => {
  await UserGame.destroy({
    where: {
      uuid: req.params.uuid,
    },
  })
  await UserGameBiodata.destroy({
    where: {
      user_uuid: req.params.uuid,
    },
  })
  return res.redirect('/dashboard')
})
