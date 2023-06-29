// do I really need this? Does it even work?

const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;