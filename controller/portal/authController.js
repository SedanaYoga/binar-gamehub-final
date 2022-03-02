const asyncHandler = require('express-async-handler')
const { UserGame, UserGameBiodata } = require('../../models')
const passport = require('../../config/passport')

exports.signUpController = asyncHandler(async (req, res, next) => {
  const user = await UserGame.signUp(req.body)
  await UserGameBiodata.create({
    user_id: user.uuid,
    fk_userId_biodata: user.id,
  })
  res.json(user)
})
