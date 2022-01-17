// IMPORT EXPRESS //
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();
const helmet = require('helmet');

// Import path //
const path = require('path');

// Import routers //
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauces');

// Calling express //

const app = express();

// Calling helmet //

app.use(helmet());

// IMPORT MONGOOSE//

const mongoose = require('mongoose');

// CONNECT TO DATABASE //

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
