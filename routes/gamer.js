const router = require('express').Router()
const User = require('../models/User')
const Game = require('../models/Game')
const { isLogged} = require('../handlers/middlewares')


//CRUD USERS

//READ USER
  router.get('/dashboard', (req, res) => {
    User.findByIdAndUpdate(req.user._id)
    .populate('favoriteGames')
    .then(user => {
      // console.log(user)
      res.render('dashboard/Gamer', user)
    })
  })

//READ GAMES 

router.get('/dashboard/games', (req, res, next) => {
  Game.find()
    .sort({createdAt: -1})
    .then(games => {
      res.render('dashboard/games', { games })
    })
    .catch(err => next(err))
})

//EDIT USER
// router.get('/dashboard/edit/:id', (req, res, next) => {
//   const { id } = req.params
//   User.findById(id)
//   .then(user => {
//     res.render('dashboard/edit', {user})
//   })
//   .catch(err => {
//     console.log(err)
//   })
// })

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
      // console.log(user)
      res.redirect(`/dashboard/${id}`)
    })
    .catch(err => {
      res.send(err)
    })
})

//DELETE USER
router.get('/dashboard/delete/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndDelete(id)
  .then(() => res.redirect('/'))
  .catch(err => next(err))
})

//DELETE FAVORITE GAMES
router.post('/dashboard/deleteFav/:id', (req, res, next) => {
  const {id} = req.params
  User.findByIdAndUpdate(req.user._id, { $pull: { favoriteGames: { $in: [id] } } }, {new: true})
  .then(user => {
    console.log("ndo por aquí", user)
    res.redirect('/dashboard')})
  .catch(err => next(err))
})

// ADD GAMES TO FAVORITES

router.get('/dashboard/games', (req, res) => {
  res.render('/dashboard/games')
})

router.post('/dashboard/games/:id', (req, res, next) => {
  let {id} = req.params
  User.findByIdAndUpdate(req.user._id, {$push: {favoriteGames: id}}, {new: true})
    .then(user => res.render('dashboard/Gamer'))
    .catch(err => res.send(err))
})

module.exports = router