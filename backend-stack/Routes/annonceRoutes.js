const express = require("express");
const {
  createAnnonce,
  getAllAnnonces,
  deleteAnnonce,
  updateAnnonce,
} = require("../Controllers/annonceController");
const authMiddleware = require("../Middleware/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, createAnnonce);
router.get("/getAllAnnonces", getAllAnnonces);
router.delete("/delete/:id", authMiddleware, deleteAnnonce);
router.put("/update/:id", authMiddleware, updateAnnonce);

module.exports = router;
