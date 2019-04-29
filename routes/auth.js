const router = require('express').Router()
const passport = require('../handlers/passport')
const User = require('../models/User')
//const { isLogged } = require('../handlers/middlewares')


//SIGNUP
//se quita o se pone el auth/signup en el get render?  
router.get('/', (req, res, next) => res.render ('index')) 

router.post('/', (req, res, next) => {
    const user = new User({ email: req.body.email, password: req.body.password, name: req.body.name });
    user.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('user: ' + user.email + " saved.");
      req.login(user, err => {
        if (err) return next(err)
         req.app.locals.loggedUser = user
         if(req.user.role === 'Admin') return res.redirect('/admins')
                else if (req.user.role === "Gamer") return res.redirect('/gamers')
                else if (req.user.role === "Hacker") return res.redirect('/hackers')
      });
    }
  })(req, res, next)
});

//LOGIN
//se quita o se pone el auth/login en el get render?
router.get('/', (req, res, next) => res.render('index'))  

router.post('/', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) return next(err)
        if(!user) return res.redirect('index')
        req.logIn(user, err => {
            if(err) return next(err)
            req.app.locals.loggedUser = user
            if(req.user.role === 'Admin') return res.redirect('/admins')
            else if (req.user.role === "Gamer") return res.redirect('/gamers')
                else if (req.user.role === "Hacker") return res.redirect('/hackers')
        })
    }) (req, res, next)
})


//LOGOUT
/*router.get('/logout', (req, res, next) => {
    req.app.locals.loggedUser=''
    req.logOut()
    res.redirect('/login')
})


//PROFILE LOGGED
router.get('/profile', isLogged, (req, res, next => res.render('auth/profile')))*/
module.exports = router