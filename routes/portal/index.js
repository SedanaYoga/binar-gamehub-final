const router = require('express').Router()
const homeRoute = require('./homeRoute.js')
const authRoute = require('./authRoute.js')
const profileRoute = require('./profileRoute.js')

router.use(homeRoute)
router.use(authRoute)
router.use(profileRoute)

module.exports = router
