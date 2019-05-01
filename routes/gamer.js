const router = require('express').Router()
const User = require('../models/User')
const Game = require('../models/Game')

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

router.get('/gamer/user/edit/:id', (req, res, next) => {
  const { id } = req.params
  Game.findById(id)
    .then(game => {
      res.render('gamer/user/edit', {game})
    })
    .catch(err => {
      console.log(err)
    })
})
router.get('/gamer/user/user-details/:id', (req,res) => {
  const {id} = req.params
  Game.findById(id)
  .then(game => {
    res.render('gamer/users/user-details', {game})
  })
  .catch(err => { 
    res.send(err)
  })
})

router.post('/gamer/user/edit/:id', (req, res, next) => {
  const { id } = req.params
  Game.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .then(game => {
      console.log(game)
      res.redirect(`/gamer/user/user-details/${id}`)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/gamer/user/delete/:id', (req, res, next) => {
  const { id } = req.params
  Game.findByIdAndDelete(id)
  .then(() => res.redirect('/gamer/user'))
  .catch(err => next(err))
})


router.get('/gamer/user/delete/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndDelete(id)
  .then(() => res.redirect('/gamer/user'))
  .catch(err => next(err))
})

module.exports = router