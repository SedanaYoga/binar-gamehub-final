const router = require('express').Router()
const { restrictAsAdmin } = require('../../middleware/authMiddleware')
const {
  deleteUserController,
} = require('../../controller/portal/deleteUserController.js')

router.get('/delete/:uuid', restrictAsAdmin, deleteUserController)

module.exports = router
