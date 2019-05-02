const router = require('express').Router()
const User = require('../models/User')
const Game = require('../models/Game')
const { isLogged} = require('../handlers/middlewares')

router.get('/dashboard', (req, res, next) => res.render('dashboard/Gamer'))

//CRUD USERS

//READ
router.get('/dashboard/', (req, res, next) => {
  Game.find()
    .sort({createdAt: -1})
    .then(games => {
      res.render('dashboard/Gamer', { games })
    })
    .catch(err => next(err))
})

router.get('/dashboard/games', (req, res, next) => {
  Game.find()
    .sort({createdAt: -1})
    .then(games => {
      res.render('dashboard/games', { games })
    })
    .catch(err => next(err))
})

//EDIT
router.get('/dashboard/edit/:id', (req, res, next) => {
  const { id } = req.params
  User.findById(id)
  .then(user => {
    res.render('dashboard/edit', {user})
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/dashboard/edit/:id', (req,res) => {
  const {id} = req.params
  User.findById(id)
  .then(user => {
    res.render('dashboard/edit', {user})
  })
  .catch(err => { 
    res.send(err)
  })
})

router.post('/dashboard/edit/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
  .then(user => {
    console.log(user)
    res.redirect(`/dashboard/`)
  })
  .catch(err => {
    res.send(err)
  })
})

//DELETE
router.get('/dashboard/delete/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndDelete(id)
  .then(() => res.redirect('/'))
  .catch(err => next(err))
})

// ADD GAMES TO FAVORITES

router.get('/dashboard/games', (req, res) => {
  res.render('/dashboard/games')
})

router.get('/dashboard/games', (req, res) => {
  res.render('/dashboard/games')
})

router.post('/dashboard/games/:id', (req, res, next) => {
  let {id} = req.params
  User.findByIdAndUpdate(req.user._id, {$push: {favoriteGames: id}}, {new: true})
    .populate(games)
    .then(user => res.render('dashboard/Gamer'))
    .catch(err => res.send(err))
})

module.exports = router