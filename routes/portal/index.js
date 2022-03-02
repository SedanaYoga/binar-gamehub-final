const router = require('express').Router()
const homeRoute = require('./homeRoute.js')
const authRoute = require('./authRoute.js')

router.use(homeRoute)
router.use(authRoute)

module.exports = router
