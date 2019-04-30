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
        return res.redirect('/profile')
      })
    });
  })

        /*passport.authenticate('local')(req, res, ()=>{
          req.app.locals.loggedUser = user
          if(req.user.role === 'Admin') return res.redirect('/admins')
          else if (req.user.role === "Gamer") return res.redirect('/gamers')
          else if (req.user.role === "Hacker") return res.redirect('/hackers')
          })
      }*/

//LOGIN
router.post('/login', (req, res, next) => {
    User.register( new User({ username: req.body.username }),
    req.body.password,
    function(err, account){
      if(err){
        return res.json(err);
      }
      return res.redirect('/login')
    });
  })

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