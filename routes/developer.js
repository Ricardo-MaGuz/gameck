const router = require('express').Router()
const User = require('../models/User')
const Comment = require('../models/Game')

router.get('/devs', (req, res, next) => res.render('devs/'))

router.get('/dev/games', (req, res, next) => {
  Comment.find()
    .then(comments => {
      res.render('dev/games', { games })
    })
    .catch(err => next(err))
})

module.exports = router
