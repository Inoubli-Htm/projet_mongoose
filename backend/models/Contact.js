const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: String,
  age: Number,
  favoriteFoods: String,
});
module.exports = mongoose.model("Contact", contactSchema);
