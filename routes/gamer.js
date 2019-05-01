const router = require('express').Router()
const User = require('../models/User')
const Game = require('../models/Game')

router.get('/dashboard/', (req, res, next) => res.render('dashboard/Gamer'))

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

module.exports = router