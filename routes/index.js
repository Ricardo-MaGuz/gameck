const router = require('express').Router();
const Game = require('../models/Game')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/games', (req, res, next) => {
  Game.find()
    .sort({createdAt: -1})
    .then(games => {
      res.render('games', { games })
    })
    .catch(err => next(err))
})

router.get('/game/:id', (req,res) => {
  const {id} = req.params
  Game.findById(id)
  .then(game => {
    res.render('game', {game})
  })
  .catch(err => { 
    res.send(err)
  })
})

module.exports = router;
