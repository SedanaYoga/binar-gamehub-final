const router = require('express').Router()

const { renderHome } = require('../../controller/portal/homeController.js')

router.get('/', renderHome)

module.exports = router
