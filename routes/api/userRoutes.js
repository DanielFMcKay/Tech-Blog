const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
    console.log(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.loggedIn = true;
      req.session.username = userData.username;
      userData.loggedIn = true;
      console.log("logged in via post route X");
    });

    res.status(200).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      console.log(userData + " is userData");
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      userData.loggedIn = true;
      req.session.loggedIn = true;
      console.log(userData.loggedIn + " is userData.loggedIn");
      console.log(req.body.loggedIn + " is req.session.loggedIn");
      console.log(userData.password + " is userData.password");
      console.log(req.body.password + " is req.body.password");
      console.log(userData.username + " is userData.username");

      const validPassword = await userData.checkPassword(req.body.password);

      console.log(validPassword + " is validPassword");
  
  
      if (userData.password === req.body.password) {
        console.log("passwords match");
      }
  
      // I know this isn't as strong, but it's still authentication
      if (userData.password !== req.body.password) {
        // if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
          console.log("in theory, you are now logged in");
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.user_id;
        req.session.logged_in = true;
        console.log("logged in fr fr");
        req.session.username = userData.username;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // userData.loggedIn = false;
      req.session.destroy(() => {
        res.status(204).end()
        // sends back to homepage if not already there 
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  