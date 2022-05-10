const mongoose = require("mongoose");

//Creating Criminal Schema
const criminalSchema = {
  name: String,
  crimename: String,
  lastseen: String,
  dangerlevel: String,
  status: String,
  img: {
    data: Buffer,
    contentType: String,
  },
};

//Creating Criminal model from schema.
const Criminal = mongoose.model("Criminal", criminalSchema);

module.exports = Criminal;
