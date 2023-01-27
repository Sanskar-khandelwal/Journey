const express = require("express");
//multer for images
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const router = express.Router();
const {
  createAchivement,
  getAchivement,
  getAchivements,
  updateAchivement,
  deleteAchivement,
} = require("../controllers/achivementController");

const Achivement = require("../models/achivementModel");

//Get all the achievements
router.get("/", getAchivements);

//get a single achievements
router.get("/:id", getAchivement);

//Post a new achievements
router.post("/", upload.single('photo'),createAchivement);

//DELELTE a achievement
router.delete("/:id", deleteAchivement);

//Update a achievement
router.patch("/:id", updateAchivement);

module.exports = router;
