exports.isLogged = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/')
    next()
  }
  
exports.isAdmin = (req, res, next) => {
    if (req.user.role !== 'Admin') {
      req.logOut()
      res.redirect('/')
    } else {
      next()
    }
  }