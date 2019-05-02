const router = require('express').Router()
const User = require('../models/User')
const Game = require('../models/Game')
const { isLogged} = require('../handlers/middlewares')

router.get('/dashboard', (req, res, next) => res.render('dashboard/Gamer'))

//CRUD USERS

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

router.get('/dashboard/gamer', (req, res) => {
  res.render('/dashboard/gamer')
})

router.post('/dashboard/gamer', (req, res, next) => {
  Game.create({...req.body})
  .then((newGame) => 
    Game.findOneAndUpdate({user: user.id},{$push:{favoriteGames: newGame}},{new:true})
    .populate('games')
    .then(() => {
      res.redirect('/dashboard/gamer')
    })
    .catch(err => res.send(err))
)})

module.exports = router