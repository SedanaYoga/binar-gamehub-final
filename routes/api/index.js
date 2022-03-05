const router = require('express').Router()
const authAPIRoute = require('./authAPIRoute.js')
const gameAPIRoute = require('./gameAPIRoute.js')
const userAPIRoute = require('./userAPIRoute.js')
const historyAPIRoute = require('./historyAPIRoute.js')
const biodataAPIRoute = require('./biodataAPIRoute.js')

router.use(authAPIRoute)
router.use(gameAPIRoute)
router.use(userAPIRoute)
router.use(historyAPIRoute)
router.use(biodataAPIRoute)

module.exports = router
