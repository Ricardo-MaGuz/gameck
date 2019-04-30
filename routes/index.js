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

  res.render(`admin`);
});


module.exports = router;
