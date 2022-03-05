const asyncHandler = require('express-async-handler')
const findHandler = require('../../utils/findHandler')
const { UserGame, UserGameBiodata } = require('../../models')

exports.renderUpdateController = asyncHandler(async (req, res) => {
  const { isAdmin, uuid } = req.user.dataValues
  let errors = []
  if (req.query.error && req.query.error === 'invalid-input')
    errors.push('Please fill in username and email.')
  const user = await findHandler(
    'UserGame',
    ['biodata'],
    'one',
    req.params.uuid
  )
  console.log(user)

  if (isAdmin || uuid === user.uuid) {
    return res.render('updateView', {
      title: `Update ${user.username}`,
      user,
      errors: errors.length === 0 ? false : errors,
    })
  }
  return res.redirect('/')
})

exports.updateUserController = asyncHandler(async (req, res) => {
  const { username, email, full_name, dob, address, contact } = req.body
  const paramsUuid = req.params.uuid

  if (email === '' || email === null || username === '' || username === null) {
    res.redirect(`/update/${paramsUuid}?error=invalid-input`)
  }

  await UserGame.update(
    {
      email,
      username,
    },
    {
      where: {
        uuid: paramsUuid,
      },
    }
  )

  await UserGameBiodata.update(
    {
      full_name,
      dob,
      address,
      contact,
    },
    {
      where: {
        user_uuid: paramsUuid,
      },
    }
  )
  return res.redirect(`/profile/${paramsUuid}`)
})
