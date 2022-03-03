const asyncHandler = require('express-async-handler')
const { UserGame } = require('../../models')

function format(user) {
  const { id, username } = user
  return {
    id,
    username,
    accessToken: user.generateToken(),
  }
}

exports.signInJWTController = asyncHandler(async (req, res) => {
  const user = await UserGame.authenticate(req.body)
  res.json(format(user))
})

exports.whoamiJwt = (req, res) => {
  const currentUser = req.user
  res.json(currentUser)
}
