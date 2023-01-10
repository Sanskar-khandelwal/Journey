const express = require("express");
const router = express.Router();

const Achivement = require("../models/achivementModel");
// console.log(Achivement);
//Get all the achievements
router.get("/", (req, res) => {
  res.json({ msg: "Get all the achivements" });
});

//get a single achievements
router.get("/:id", (req, res) => {
  res.json({ msg: "getting a single achivement" });
});
//Post a new achievements
router.post("/", async (req, res) => {
  const { title, disc, location } = req.body;
  try {
    const achievement = await Achivement.create({
      title,
      disc,
      location,
    });
    res.status(200).json(achievement);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
  res.send("working correct");
});

//DELELTE a achievement
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE workout" });
});

//Update a achievement
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a achievement" });
});

module.exports = router;
