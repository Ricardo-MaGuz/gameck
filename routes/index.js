const router = require('express').Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/games', (req, res, next) => {
  res.render('games');
});


router.get('/dashboard', (req, res, next) => {
  const { role } = req.user;

  res.render(`dashboard/${role}`);
});

router.get('/admin', (req, res, next) => {
  const { role } = req.user;

<<<<<<< HEAD
  res.render('admin/${role}`');
=======
  res.render(`admin'/${role}`);
>>>>>>> gabriela
});

router.get('/games', (req, res, next) => {
  Game.find()
  .sort({ createdAt: -1 })
  .then(games => {
    res.render('games/all', {games})
  })
  .catch(err => next(err))
})

router.get('/games/:id', (req, res, next) => {
  const {id} = req.params
  const findGames= Game.findById(id)
  .sort({createdAt: -1})
  Promise(findGames)
  .then(response => {
    res.render('games/detail', {
      game: response[0]
    })
  })
  .catch(err => next(err))
})

module.exports = router;
