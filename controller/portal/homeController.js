const asyncHandler = require('express-async-handler')

exports.renderHome = (req, res) => {
  if (req.isAuthenticated()) {
    const userData = req.user.dataValues
    res.render('homeView', {
      title: 'Home',
      isAuthenticated: true,
      ...userData,
    })
  } else {
    res.render('homeView', { title: 'Home', isAuthenticated: false })
  }
}
