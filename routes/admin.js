const router = require('express').Router()
const mongoose = require('mongoose')
const User = require('../models/User')
const Game = require('../models/Game')

router.get('/admin/index', (req, res, next) => res.render('admin/index'))

router.get('/admin/games', (req, res, next) => {
  Game.find()
    .sort({createdAt: -1})
    .then(games => {
      res.render('admin/games', { games })
    })
    .catch(err => next(err))
})

router.post('/admin/games/create', (req, res, next) => {
  Game.create({...req.body})
  .then(() => res.redirect('/admin/games'))
  .catch(err => next(err))
})

router.get('/admin/games/edit/:id', (req, res, next) => {
  const { id } = req.params
  Game.findById(id)
    .then(game => {
      res.render('admin/games/edit', {game})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/admin/games/edit/:id', (req, res, next) => {
  const { id } = req.params
  Game.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .then(game => {
      console.log(game)
      res.redirect(`/games/${game._id}`)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/admin/games/delete/:id', (req, res, next) => {
  const { id } = req.params
  Game.findByIdAndDelete(id)
  .then(() => res.redirect('/admin/games'))
  .catch(err => next(err))
})

router.get('/admin/users', (req, res, next) => {
  User.find()
    .sort({ createdAt: -1 })
    .then(users => {
      res.render('admin/users', { users })
    })
    .catch(err => next(err))
})

router.get('/admin/users/delete/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndDelete(id)
  .then(() => res.redirect('/admin/users'))
  .catch(err => next(err))
})

module.exports = router