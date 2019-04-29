const router = require('express').Router()
const User = require('../models/User')
const Comment = require('../models/Game')

router.get('/admins', (req, res, next) => res.render('admins/'))

router.get('/admins/users', (req, res, next) => {
  User.find()
    .sort({ createdAt: -1 })
    .populate('game')
    .then(users => {
      res.render('admins/users', { users })
    })
    .catch(err => next(err))
})


router.get('/admins/games', (req, res, next) => {
  Comment.find()
    .then(comments => {
      res.render('admins/games', { games })
    })
    .catch(err => next(err))
})

module.exports = router
