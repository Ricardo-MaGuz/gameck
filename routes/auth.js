const router = require('express').Router()
const passport = require('../handlers/passport')
const User = require('../models/User')
//const { isLogged } = require('../handlers/middlewares')


//SIGNUP 
router.get('/', (req, res, next) => res.render ('index')) 

router.post('/signup', (req, res, next) => {
    User.register( new User({ email: req.body.email }),
    req.body.password,
    function(err, account){
      if(err){
        return res.json(err);
      }
      passport.authenticate('local')(req, res, () => {
        console.log(req.user)
        return res.redirect('/gamers')
      })
    });
  })

//LOGIN
router.get('/', (req, res, next)=>{
  return res.render('index');
})
router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}))

//LOGOUT
router.get('/logout', (req, res, next) => {
    req.logOut()
    res.redirect('/login')
})

//PROFILE LOGGED
//router.get('/profile', isLogged, (req, res, next => res.render('auth/profile')))
module.exports = router