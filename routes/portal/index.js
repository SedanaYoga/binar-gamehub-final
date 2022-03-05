const router = require('express').Router()
const homeRoute = require('./homeRoute.js')
const authRoute = require('./authRoute.js')
const profileRoute = require('./profileRoute.js')
const updateRoute = require('./updateRoute')
const dashboardRoute = require('./dashboardRoute')
const deleteRoute = require('./deleteRoute')
const gameRoute = require('./gameRoute.js')

router.use(homeRoute)
router.use(authRoute)
router.use(profileRoute)
router.use(dashboardRoute)
router.use(updateRoute)
router.use(deleteRoute)
router.use(gameRoute)

module.exports = router
