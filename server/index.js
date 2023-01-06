// Dependencies import
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//local imports
import postRoutes from "./routes/posts.js";

//server code
const app = express();

app.use("/posts", postRoutes);

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//Mongodb Atlas
const CONNECTION_URL =
  "mongodb+srv://Sam:mernFirstProject123@cluster0.iwhh4bw.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err));
