// IMPORT EXPRESS//
const express = require('express');

// CREATION ROUTER //
const router = express.router();

// CONTROLLER POUR DIFFERENTES ROUTES //

const userControl = require('../controllers/user');

router.post('/signup', userControl.signup);

router.post('/login', userControl.login);

// // Importer des packages de sécurité //
// // Dotenv pour les variables d'environnement //
// const dotenv = require('dotenv');

// // casque pour configurer correctement les en-têtes HTTP //
// dotenv.config();
// const helmet = require('helmet');

module.exports = router;
