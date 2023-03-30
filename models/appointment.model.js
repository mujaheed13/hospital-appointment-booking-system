const mongoose = require("mongoose");
const appSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  doctor_id: {
    type: String,
    required: true,
  },
  appointment_slot: {
    type: Object,
    required: true,
  },
});

const AppointmentModel = mongoose.model("appointment", appSchema);

module.exports = { AppointmentModel };
