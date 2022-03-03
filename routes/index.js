const express = require('express')
const router = express.Router()
const { notFound, errorHandler } = require('../middleware/errorMiddleware.js')
const portalRoute = require('./portal')
const apiRoute = require('./api')

router.use(portalRoute)
router.use(apiRoute)
router.use(notFound)
router.use(errorHandler)

module.exports = router
