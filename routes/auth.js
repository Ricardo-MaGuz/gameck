const router = require('express').Router()
const passport = require('../handlers/passport')
const User = require('../models/User')
const { isLogged, isAdmin} = require('../handlers/middlewares')


//SIGNUP 
router.get('/', (req, res, next) => res.render ('index')) 

router.post('/signup', (req, res, next) => {
    User.register( new User({ email: req.body.email, name: req.body.name }),
    req.body.password,
    function(err, account){
      if(err){
        return res.json(err);
      }
      passport.authenticate('local')(req, res, () => {  
        req.app.locals.loggedUser = req.user     
        return res.redirect('/dashboard')
      })
    });
  }) 

//LOGIN
router.get('/', (req, res, next)=>{
  return res.render('index');
})
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)
    if (!user) return res.redirect('/dashboard')
    req.logIn(user, err => {
      if (err) return next(err)
      req.app.locals.loggedUser = user
      if (req.user.role === 'Admin') return res.redirect('admin/')
      else if (req.user.role === 'Gamer') return res.redirect('dashboard/')
    })
  })(req, res, next)
})


//LOGOUT
router.get('/logout', (req, res, next) => {
    req.logOut()
    res.redirect('/login')
})

//PROFILE LOGGED
//router.get('/profile', isLogged, (req, res, next => res.render('auth/profile')))
module.exports = router