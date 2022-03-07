const asyncHandler = require('express-async-handler')
const { UserGame, UserGameBiodata, UserStats } = require('../../models')
const passport = require('../../config/passportSession')

exports.signUpController = asyncHandler(async (req, res, next) => {
  if (
    !req.body.username ||
    req.body.username === '' ||
    !req.body.email ||
    req.body.email === '' ||
    !req.body.password ||
    req.body.password === ''
  )
    res.status(400).json({ message: 'Please enter all user data' })

  const { username, email, password, confirmPassword } = req.body
  const isAdmin = req.body.isAdmin ? true : false
  if (password !== confirmPassword) res.send("Password doesn't match!")

  const user = await UserGame.signUp({
    username,
    email,
    password,
    isAdmin,
  })

  await UserGameBiodata.create({
    user_uuid: user.uuid,
    fk_userId_biodata: user.id,
  })

  await UserStats.create({
    user_uuid: user.uuid,
    fk_userId_stats: user.id,
    win_count_comp: 0,
    lose_count_comp: 0,
    draw_count_comp: 0,
    win_count_player: 0,
    lose_count_player: 0,
    draw_count_player: 0,
  })

  res.redirect('/signin')
})

exports.signInController = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin',
  failureFlash: true,
})

exports.whoami = (req, res) => {
  res.json(req.user.dataValues)
}

exports.signOutController = (req, res) => {
  req.logout()
  res.redirect('/')
}
