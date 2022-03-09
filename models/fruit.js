
// Import Dependencies
const mongoose = require("./connection");

// Define Model
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make fruits schema
const fruitsSchema = new Schema({
  name: String,
  color: String,
  readyToEat: Boolean,
});

// make fruit model
const Fruit = model("Fruit", fruitsSchema);


// Export Model
module.exports = Fruit;
