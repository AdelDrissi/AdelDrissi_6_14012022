// IMPORT EXPRESS//
const express = require('express');

// CREATION ROUTER //
const router = express.router();

// Importer des packages de sécurité //
// Dotenv pour les variables d'environnement //
const dotenv = require('dotenv');

// casque pour configurer correctement les en-têtes HTTP //
dotenv.config();
const helmet = require('helmet');
