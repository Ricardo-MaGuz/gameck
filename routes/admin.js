const router = require('express').Router()
const User = require('../models/User')
const Game = require('../models/Game')

router.get('/admin/index', (req, res, next) => res.render('admin/index'))

//CRUD GAMES
//READ
router.get('/admin/games', (req, res, next) => {
  Game.find()
    .sort({createdAt: -1})
    .then(games => {
      res.render('admin/games', { games })
    })
    .catch(err => next(err))
})
//CREATE
router.post('/admin/games/create', (req, res, next) => {
  Game.create({...req.body})
  .then(() => res.redirect('/admin/games'))
  .catch(err => next(err))
})
//UPDATE
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
router.get('/admin/games/game-details/:id', (req,res) => {
  const {id} = req.params
  Game.findById(id)
  .then(game => {
    res.render('admin/games/game-details', {game})
  })
  .catch(err => { 
    res.send(err)
  })
})

router.post('/admin/games/edit/:id', (req, res, next) => {
  const { id } = req.params
  Game.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .then(game => {
      console.log(game)
      res.redirect(`/admin/games/game-details/${id}`)
    })
    .catch(err => {
      res.send(err)
    })
})
//DELETE
router.get('/admin/games/delete/:id', (req, res, next) => {
  const { id } = req.params
  Game.findByIdAndDelete(id)
  .then(() => res.redirect('/admin/games'))
  .catch(err => next(err))
})


//CRUD USERS
//READ
router.get('/admin/users', (req, res, next) => {
  User.find()
    .sort({ createdAt: -1 })
    .then(users => {
      res.render('admin/users', { users })
    })
    .catch(err => next(err))
})

//UPDATE
router.get('/admin/users/edit/:id', (req, res, next) => {
  const { id } = req.params
  User.findById(id)
    .then(user => {
      res.render('admin/users/edit', {user})
    })
    .catch(err => {
      console.log(err)
    })
})
router.get('/admin/users/user-details/:id', (req,res) => {
  const {id} = req.params
  User.findById(id)
  .then(user => {
    res.render('admin/users/user-details', {user})
  })
  .catch(err => { 
    res.send(err)
  })
})

router.post('/admin/users/edit/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .then(user => {
      console.log(user)
      res.redirect(`/admin/users/user-details/${id}`)
    })
    .catch(err => {
      res.send(err)
    })
})

//DELETE
router.get('/admin/users/delete/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndDelete(id)
  .then(() => res.redirect('/admin/users'))
  .catch(err => next(err))
})

module.exports = router