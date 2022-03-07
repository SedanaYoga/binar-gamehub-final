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
  const { email, password } = req.body
  const user = await UserGame.authenticate({ email, password })
  res.json(format(user))
})

exports.whoamiJwt = (req, res) => {
  const currentUser = req.user
  res.json(currentUser)
}
