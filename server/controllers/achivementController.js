const { default: mongoose } = require("mongoose");
const Achivement = require("../models/achivementModel");

//Get all the achivements
const getAchivements = async (req, res) => {
  const achivements = await Achivement.find({}).sort({ createdAt: -1 });

  res.status(200).json(achivements);
};

// get a single achivement

const getAchivement = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such achivement" });
  }

  const achivement = await Achivement.findById(id);
  if (!achivement) {
    return res.status(404).json({
      error: "No Such Achivement",
    });
  }

  res.status(200).json(achivement);
};

// create new Achivement
const createAchivement = async (req, res) => {
  const { title, disc, location } = req.body;

  //add a doc to DB
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
};

// delete a Achivement
const deleteAchivement = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such achivement" });
  }
  const achivement = await Achivement.findOneAndDelete({ _id: id });
  if (!achivement) {
    return res.status(400).json({ error: "No such achivement" });
  }

  res.status(200).json(achivement);
};

//update a Achivement
const updateAchivement = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such achievement" });
  }

  const achivement = await Achivement.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if(!achivement) {
    return res.status(400).json({ error: "NO such achivement" });
  }

  res.status(200).json(achivement);
};

module.exports = {
  getAchivements,
  getAchivement,
  createAchivement,
  updateAchivement,
  deleteAchivement,
};
