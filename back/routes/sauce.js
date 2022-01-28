//IMPORT EXPRESS//
const express = require('express');

// CREATION ROUTER//
const router = express.Router();

//IMPORT CONTROLLER//
const sauceControl = require('../controllers/sauce');

//IMPORT AUTHENTIFICATION//
const auth = require('../middleware/auth');

//IMPORT MULTER //

const multer = require('../middleware/multer');

router.post('/', auth, multer, sauceControl.createSauce);
router.get('/:id', auth, sauceControl.readSauce);
router.put('/:id', auth, multer, sauceControl.updateSauce);
router.delete('/:id', auth, sauceControl.deleteSauce);

//READ ALL SAUCES//
router.get('/', sauceControl.readAllSauces);

// Like or Dislike //
router.post('/:id/like', auth, sauceControl.likeDislike);

module.exports = router;
