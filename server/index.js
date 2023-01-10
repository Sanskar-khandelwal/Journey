require("dotenv").config();
// Dependencies import
const express = require("express");
const achievementRoutes = require("./routes/Achivements");
//database
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
//env
const env = process.env;
//server code
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
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
