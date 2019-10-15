var mongoose = require("mongoose");

var item = mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: [
      // Flowers
      "daisy",
      "sunflower",
      "rose",
      "bluebell",
      "white rose",
      "maple",
      "clover",
      "sakura",
      "seed",
      // Kettles
      "golden kettle",
      "bronze kettle",
      "iron kettle",
      // Other
      "any",
      "empty"
    ]
  },
  amount: {
    type: String,
    enum: ["1", "2", "3", "4", "N/A"],
    default: "N/A"
  }
});

var CarrySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true, enum: ["menu", "letter"] },
    recipes: [[item]]
  },
  { collection: "carry" }
);

module.exports = mongoose.model("carry", CarrySchema);
