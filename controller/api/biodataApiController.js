const asyncHandler = require('express-async-handler')
const { UserGameBiodata } = require('../../models')
const findHandler = require('../../utils/findHandler.js')

exports.getAllBiodataApiControl = asyncHandler(async (req, res) => {
  const biodata = await findHandler('UserGameBiodata', [], 'all')
  return res.json(biodata)
})
exports.getOneBiodataApiControl = asyncHandler(async (req, res) => {
  const paramsUuid = req.params.uuid
  const biodata = await findHandler('UserGameBiodata', [], 'one', paramsUuid)
  res.json(biodata)
})
exports.updateBiodataApiControl = asyncHandler(async (req, res) => {
  const { full_name, dob, address, contact } = req.body
  const paramsUuid = req.params.uuid

  await UserGameBiodata.update(
    {
      full_name,
      dob,
      address,
      contact,
    },
    {
      where: {
        uuid: paramsUuid,
      },
    }
  )
  return res.json({
    full_name,
    dob,
    address,
    contact,
    message: 'Biodata is successfully updated!',
  })
})
