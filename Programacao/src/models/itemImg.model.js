const mongoose = require("mongoose");

const itemImgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

module.exports = mongoose.model("Img", itemImgSchema);