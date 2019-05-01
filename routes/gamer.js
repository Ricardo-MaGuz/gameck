const router = require('express').Router()
const User = require('../models/User')
const Game = require('../models/Game')

<<<<<<< HEAD
router.get('/dashboard/', (req, res, next) => res.render('dashboard/Gamer'))

//CRUD USERS
=======
router.get('/gamer/index', (req, res, next) => res.render('gamer/index'))

/*router.get('/gamer/games', (req, res, next) => {
  User.findById(id)
    .sort({createdAt: -1})
    .then(games => {
      res.render('gamer/games', { games })
    })
    .catch(err => next(err))
})*/

router.post('dashboard/games/edit/:id', isLoggedIn, (req,res, next)=>{
  Games.findOneAndUpdate({gamer:req.gamer.id}, {$push:{favoriteGames:req.body.gameId}})
  .then(game => {
    res.redirect('/dashboard/games', game)
  })
  })
>>>>>>> gabriela

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

module.exports = router