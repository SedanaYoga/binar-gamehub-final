const router = require('express').Router()
const homeRoute = require('./homeRoute.js')

router.use(homeRoute)

module.exports = router
