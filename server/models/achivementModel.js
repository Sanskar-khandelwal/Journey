const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//schema defines the structure of doc, model apply schema to model
const achivementSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    disc: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
     
    },
  },
  {
    timestamps: true, // add even the document is created and also the time of if doc is updated
  }
);

module.exports = mongoose.model("Achivement", achivementSchema);
