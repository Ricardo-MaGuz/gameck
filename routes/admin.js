const router = require('express').Router()
const User = require('../models/User')
const Game = require('../models/Game')

router.get('/dashboard/admin', (req, res, next) => res.render('/dashboard/admin'))

router.get('/dashboard/games', (req, res, next) => {
  Game.find()
    .sort({createdAt: -1})
    .then(games => {
      res.render('/dashboard/games', { games })
    })
    .catch(err => next(err))
})

router.post('/dashboard/games/create', (req, res, next) => {
  Game.create({...req.body})
  .then(() => res.redirect('/dashboard/games'))
  .catch(err => next(err))
})

router.get('/dashboard/games/edit/:id', (req, res, next) => {
  const { id } = req.params
  Game.findById(id)
    .then(game => {
      res.render('game/new', {game})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/dashboard/games/edit/:id', (req, res, next) => {
  const { id } = req.params
  Game.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .then(game => {
      res.redirect(`/games/${game._id}`)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/dashboard/games/delete/:id', (req, res, next) => {
  const { id } = req.params
  Game.findByIdAndDelete(id)
  .then(() => res.redirect('/dashboard/games'))
  .catch(err => next(err))
})

router.get('/dashboard/users', (req, res, next) => {
  User.find()
    .sort({ createdAt: -1 })
    .then(users => {
      res.render('dashboard/users', { users })
    })
    .catch(err => next(err))
})

router.get('/dashboard/users/delete/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndDelete(id)
  .then(() => res.redirect('/dashboard/users'))
  .catch(err => next(err))
})

module.exports = router