const router = require('express').Router()
const Comment = require('../models/Game')
const Comment = require('../models/User')

router.get('/gamers', (req, res, next) => res.render('gamers/'))


module.exports = router
