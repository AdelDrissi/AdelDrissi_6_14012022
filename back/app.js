// IMPORT EXPRESS //
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const helmet = require('helmet');

//DOTENV FOR ENVIRONMENT VARIABLES//
const dotenv = require('dotenv');
dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ndmyy.mongodb.net/${process.env.DB_USERNAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Transform req on JSON //

app.use(express.json());
app.use(helmet.permittedCrossDomainPolicies());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// Import routers //
const userRoutes = require('./routes/user.routes');
const sauceRoutes = require('./routes/sauce');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

module.exports = app;
