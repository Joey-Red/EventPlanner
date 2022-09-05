mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  postBody: { type: String, required: true },
  postUser: { type: String, required: true },
  dateAdded: { type: String, required: true },
});

module.exports = mongoose.model("Post", PostSchema);
