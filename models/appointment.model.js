const mongoose = require("mongoose");

const appSchema = new mongoose.Schema(

  {
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
  },
  {
    versionKey: false,
  }
);


const AppointmentModel = mongoose.model("appointment", appSchema);

module.exports = { AppointmentModel };
