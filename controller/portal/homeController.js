const asyncHandler = require('express-async-handler')

exports.renderHome = (req, res) => {
  res.render('homeView', { title: 'Home' })
}
