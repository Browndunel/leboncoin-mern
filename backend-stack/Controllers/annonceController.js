const Annonce = require("../Models/annonceModel");

const createAnnonce = async (req, res) => {
  try {
    const annonce = new Annonce({
      ...req.body,
      author: req.user._id, // l'auteur est l'utilisateur connecté
    });
    await annonce.save();

    res.status(201).send(annonce);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getAllAnnonces = async (req, res) => {
  try {
    const annonces = await Annonce.find({}).populate("author", "name email");
    res.status(200).send(annonces);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteAnnonce = async (req, res) => {
  try {
    const annonce = await Annonce.findByIdAndDelete(req.params.id);
    if (!annonce) {
      return res.status(404).send({ error: "Annonce not found" });
    }
    res.status(200).send(annonce);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const updateAnnonce = async (req, res) => {
  try {
    const annonce = await Annonce.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!annonce) {
      return res.status(404).send({ error: "Annonce not found" });
    }
    res.status(200).send(annonce);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { createAnnonce, getAllAnnonces, deleteAnnonce, updateAnnonce };
