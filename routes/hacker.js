const router = require('express').Router()
const User = require('../models/User')
const Comment = require('../models/Game')

router.get('/hackers', (req, res, next) => res.render('hackers/'))

router.get('/hackers/games', (req, res, next) => {
  Comment.find()
    .then(comments => {
      res.render('hackers/games', { games })
    })
    .catch(err => next(err))
})

module.exports = router
