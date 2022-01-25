// IMPORT EXPRESS //
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');

mongoose
  .connect(
    'mongodb+srv://AdelDrissi:Boubou91480@cluster0.ndmyy.mongodb.net/Adel?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Transform req on JSON //
app.use(express.json());

app.use(cors());

// Import routers //
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

module.exports = app;
