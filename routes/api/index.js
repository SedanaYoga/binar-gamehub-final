const router = require('express').Router()
const authAPIRoute = require('./authAPIRoute.js')

router.use(authAPIRoute)

module.exports = router
