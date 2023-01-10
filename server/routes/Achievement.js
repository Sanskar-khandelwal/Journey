const express = require('express')
const router = express.Router();

//Get all the achievements
router.get("/", (req, res) => {
  res.json({ msg: "Get all the achivements" });
});

//get a single achievements
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single achievements" });
});

//Post a new achievements
router.post("/", (req, res) => {
  res.json({ msg: "Post a new achievements" });
});

//DELELTE a achievement
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE workout" });
});

//Update a achievement
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a achievement" });
});


module.exports = router
