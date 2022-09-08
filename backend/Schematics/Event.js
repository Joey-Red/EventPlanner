mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventTitle: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventCreator: { type: String, required: true },
  dateCreated: { type: String, required: true },
  emailRegistry: { type: Array, required: true },
  eventAdmins: { type: Array, required: true },
  eventUpdatePosts: { type: Array, required: true },
  hostEmail: { type: String, required: true },
  publicStatus: { type: Boolean, required: true },
  eventTime: { type: String, required: true },
  eventDate: { type: String, required: true },
});

module.exports = mongoose.model("Event", EventSchema);
