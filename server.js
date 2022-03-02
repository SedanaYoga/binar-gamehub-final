const express = require('express')
const path = require('path')
const morgan = require('morgan')
const routes = require('./routes')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('./config/passport.js')

// App Initialization
const app = express()

// Development setup
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  app.use(morgan('dev'))
}

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
  })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// View Engine
app.set('view engine', 'ejs')

// Routes
app.use(routes)

// Server Listener to PORT variable
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
