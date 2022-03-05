const router = require('express').Router()
const { restrictAsAdmin } = require('../../middleware/authMiddleware')
const {
  renderDashboardController,
} = require('../../controller/portal/dashboardController')

router.get('/dashboard', restrictAsAdmin, renderDashboardController)

module.exports = router
