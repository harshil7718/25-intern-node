const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryId: 
  { type: String, 
    unique: true, 
    required: true },
  categoryName: {
    type: String,
    enum: ["Fashion", "Art", "Collectibles"],
    required: true,
  },
  description: 
  { type: String },
  active:
   { type: Boolean, default: true },
});

module.exports = mongoose.model("Category", categorySchema);
