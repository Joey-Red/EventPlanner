mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  numEvents: { type: Number, required: true },
});

module.exports = mongoose.model("User", UserSchema);
