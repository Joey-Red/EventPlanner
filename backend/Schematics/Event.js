mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventTitle: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventCreator: { type: String, required: true },
  dateCreated: { type: String, required: true },
  emailRegistry: { type: Array, required: true },
  eventAdmins: { type: Array, required: true },
  eventUpdatePosts: { type: Array, required: true },
});

module.exports = mongoose.model("Event", EventSchema);
