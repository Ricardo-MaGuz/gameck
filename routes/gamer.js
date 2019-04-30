const router = require('express').Router()
const Comment = require('../models/Game')
const Comment = require('../models/User')

router.get('/dashboard/gamer', (req, res, next) => res.render('dashboard/gamer'))


module.exports = router
