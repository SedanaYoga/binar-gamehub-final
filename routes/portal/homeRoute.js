const router = require('express').Router()

const { renderHome } = require('../../controller/portal/homeController.js')
const { restrict } = require('../../middleware/authMiddleware')

router.get('/', renderHome)

module.exports = router
