var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateCreated: { type: Date, default: Date.now },
    getting: { type: mongoose.Schema.Types.ObjectId, ref: "CarryModel" },
    gotten: [{ type: mongoose.Schema.Types.ObjectId, ref: "CarryModel" }]
  },
  { collection: "user" }
);

module.exports = mongoose.model("user", UserSchema);
