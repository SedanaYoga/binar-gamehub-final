const express = require('express')
const router = express.Router()
const { restrictJwt } = require('../../middleware/authMiddleware')
const {
  getAllBiodataApiControl,
  getOneBiodataApiControl,
  updateBiodataApiControl,
} = require('../../controller/api/biodataApiController.js')

router.get('/api/v1/biodata', restrictJwt, getAllBiodataApiControl)
router.get('/api/v1/biodata/:uuid', restrictJwt, getOneBiodataApiControl)
router.put('/api/v1/biodata/:uuid', restrictJwt, updateBiodataApiControl)
module.exports = router
