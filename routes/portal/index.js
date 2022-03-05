const router = require('express').Router()
const homeRoute = require('./homeRoute.js')
const authRoute = require('./authRoute.js')
const profileRoute = require('./profileRoute.js')
const updateRoute = require('./updateRoute')

router.use(homeRoute)
router.use(authRoute)
router.use(profileRoute)
router.use(updateRoute)

module.exports = router
