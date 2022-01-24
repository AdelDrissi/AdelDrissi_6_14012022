// IMPORT EXPRESS//
const express = require('express');

// CREATION ROUTER //
const router = express.Router();

// CONTROLLER POUR DIFFERENTES ROUTES //

const userControl = require('../controllers/user');

//CREATE ROUTES//
router.post('/signup', userControl.signup);
router.post('/login', userControl.login);

module.exports = router;
