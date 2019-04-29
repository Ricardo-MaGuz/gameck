const router = require('express').Router()
const User = require('../models/User')
const Comment = require('../models/Game')

router.get('/admin', (req, res, next) => res.render('admin/'))

router.get('/admin/users', (req, res, next) => {
  User.find()
    .sort({ createdAt: -1 })
    .populate('game')
    .then(users => {
      res.render('admin/users', { users })
    })
    .catch(err => next(err))
})


router.get('/admin/games', (req, res, next) => {
  Comment.find()
    .then(comments => {
      res.render('admin/games', { games })
    })
    .catch(err => next(err))
})

module.exports = router
