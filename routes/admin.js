const router = require('express').Router()
const User = require('../models/User')
const Comment = require('../models/Game')

router.get('/dashboard/admin', (req, res, next) => res.render('dashboard/admin'))

router.get('/dashboard/users', (req, res, next) => {
  User.find()
    .sort({ createdAt: -1 })
    .populate('game')
    .then(users => {
      res.render('dashboard/users', { users })
    })
    .catch(err => next(err))
})


router.get('/dashboard/games', (req, res, next) => {
  Comment.find()
    .then(comments => {
      res.render('dashboard/games', { games })
    })
    .catch(err => next(err))
})

module.exports = router
