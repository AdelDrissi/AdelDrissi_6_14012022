// IMPORT EXPRESS //
const express = require('express');
const dotenv = require('dotenv');
const app = require('app');
dotenv.config();
const mongoose = require('mongoose');

// Import path //
const path = require('path');

//Transform req on JSON //

app.use(express.json());

// Import routers //
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauces');

// Calling express //

const app = express();

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
};
app.use(allowCrossDomain);

// // CONNECT TO DATABASE //

mongoose
  .connect(
    'mongodb+srv://projet6:<Boubou91480>@cluster0.ndmyy.mongodb.net/Adel?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = app;
