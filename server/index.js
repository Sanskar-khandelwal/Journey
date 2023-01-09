// Dependencies import
import express from "express";
import bodyParser from "body-parser";

//local imports
import postRoutes from "./routes/posts.js";

//server code
const app = express();



app.listen(5000, () => {
console.log("Server is listening on port number 5000")
})