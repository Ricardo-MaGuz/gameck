const router = require('express').Router()
const User = require('../models/User')
const Comment = require('../models/Game')

router.get('/dashboard', (req, res, next) => res.render('dashboard/'))

router.get('/dashboard/games', (req, res, next) => {
  Comment.find()
    .then(comments => {
      res.render('dashboard/games', { games })
    })
    .catch(err => next(err))
})

module.exports = router
