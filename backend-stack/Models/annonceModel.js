const mongoose = require("mongoose");

const annonceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Exporter le modèle
module.exports = mongoose.model("Annonce", annonceSchema);