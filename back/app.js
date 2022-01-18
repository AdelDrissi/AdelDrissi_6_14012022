// IMPORT EXPRESS //
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

// Import path //
const path = require('path');

// Import routers //
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauces');

// Calling express //

const app = express();

// Calling helmet //

app.use(helmet());
app.use('/api/auth', userRoutes);

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
