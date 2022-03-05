const express = require('express')
const router = express.Router()
const { restrictJwt } = require('../../middleware/authMiddleware')
const {
  getAllHistoryApiControl,
  getOneHistoryApiControl,
  createHistoryApiControl,
  updateHistoryApiControl,
  deleteHistoryApiControl,
} = require('../../controller/api/historyApiController.js')

router.get('/api/v1/histories', restrictJwt, getAllHistoryApiControl)
router.get('/api/v1/histories/:uuid', restrictJwt, getOneHistoryApiControl)
router.post('/api/v1/histories', restrictJwt, createHistoryApiControl)
router.put('//api/v1/histories/:uuid', restrictJwt, updateHistoryApiControl)
router.delete('/api/v1/histories/:uuid', restrictJwt, deleteHistoryApiControl)

module.exports = router
