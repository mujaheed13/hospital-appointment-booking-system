const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    slots: {
      type: Array,
      required: true,
    },
    
  },

  {
    versionKey: false,
  }
);

const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = { DoctorModel };
