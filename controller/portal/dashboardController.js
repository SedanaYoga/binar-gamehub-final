const asyncHandler = require('express-async-handler')
const findHandler = require('../../utils/findHandler')

exports.renderDashboardController = asyncHandler(async (req, res) => {
  const users = await findHandler('UserGame', [], 'all')
  res.render('dashboardView', { title: 'Dashboard', users })
})
