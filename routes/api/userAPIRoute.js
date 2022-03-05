const express = require('express')
const router = express.Router()
const { restrictJwt } = require('../../middleware/authMiddleware')
const {
  getAllUsersApiControl,
  getOneUserApiControl,
  createUserApiControl,
  updateUserApiControl,
  deleteUserApiControl,
} = require('../../controller/api/userApiController.js')

router.get('/api/v1/users', restrictJwt, getAllUsersApiControl)
router.get('/api/v1/users/:uuid', restrictJwt, getOneUserApiControl)
router.post('/api/v1/users', restrictJwt, createUserApiControl)
router.put('/api/v1/users/:uuid', restrictJwt, updateUserApiControl)
router.delete('/api/v1/users/:uuid', restrictJwt, deleteUserApiControl)
module.exports = router
