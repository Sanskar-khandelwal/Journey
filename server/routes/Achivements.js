const express = require("express");
//multer for images
const multer = require("multer");
const router = express.Router();
var upload = multer({ dest: "uploads/" });

// multer image config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// let upload = multer({ storage, fileFilter });

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
router.post("/", upload.single("photo"), createAchivement);

//DELELTE a achievement
router.delete("/:id", deleteAchivement);

//Update a achievement
router.patch("/:id", updateAchivement);

module.exports = router;
