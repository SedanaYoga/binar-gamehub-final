const router = require('express').Router()
const authAPIRoute = require('./authAPIRoute.js')
const gameAPIRoute = require('./gameAPIRoute.js')

router.use(authAPIRoute)
router.use(gameAPIRoute)

module.exports = router
