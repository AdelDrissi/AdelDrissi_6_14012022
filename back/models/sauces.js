// IMPORT MONGOOSE //
const mongoose = require('mongoose');

// CREATION DU SCHEMA //
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  usersLiked: [{ type: String }],
});

// EXPORTATTION DU MODELE //
module.exports = mongoose.model('Sauce', sauceSchema);
