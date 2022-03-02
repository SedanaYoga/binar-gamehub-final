const express = require('express')
const router = express.Router()
const { notFound, errorHandler } = require('../middleware/errorMiddleware.js')
const portalRoute = require('./portal/index.js')

router.use(portalRoute)
router.use(notFound)
router.use(errorHandler)

module.exports = router
