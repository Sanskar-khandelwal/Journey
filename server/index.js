require("dotenv").config();
// Dependencies import
const express = require("express");
const achievementRoutes = require("./routes/Achivements");
const Achievement = require("./models/achivementModel");
const multer = require("multer");
//cors
const cors = require("cors");
//database
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
//env
const env = process.env;
//import path
const path = require("path");

//server code
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(cors());
app.use(express.static("uploads"));

//create storage function
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//handler for post req
app.post("/api/achievements", upload.single("photo"), async (req, res) => {
  const { title, disc, location } = req.body;
  // console.log(req.file);
  const photo = req.file.path;

  try {
    const achievement = await Achievement.create({
      title,
      disc,
      location,
      photo,
    });
    // console.log(achievement);
    res.status(200).json(achievement);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

//routes
app.use("/api/achievements", achievementRoutes);
//connect to db
mongoose
  .connect(env.MONG_URI)
  .then(() => {
    //listening on port
    app.listen(env.PORT, () => {
      console.log(
        `Connected to the DB & Server is listening on port number 5000`
      );
    });
  })
  .catch((err) => console.log(err));
