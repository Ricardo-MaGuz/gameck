const router = require('express').Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/dashboard', (req, res, next) => {
  const { role } = req.user;

  res.render(`${role}/profile`);
});

module.exports = router;
