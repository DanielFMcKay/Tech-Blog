// code goes here

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const hbs = exphbs.create({ helpers });


// cookie attributes, essentially
const sessionAttributes = { 
    secret: 'Freemasons run the country!',
    cookie: {
      // maxAge is four hours
      maxAge: 14400000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  
app.use(session(sessionAttributes));

app.engine('handlebars', hbs.engine);


const PORT = process.env.PORT || 3001;

app.set('view engine', 'handlebars');
// Express middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);


// Start server
sequelize.sync({force: false}).then(() => {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})});