const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      // required: true,
      unique: true
    },
    name:  {
      type: String,
      // required: true
    },
    password:  {
      type: String,
      // required: true
    },
    mob_no:  {
      type: String,
      // required: true
    },
    dob:  {
      type: String,
      // required: true
    },
    role: {
      type: String,
      // required: true
    }
  },
  {
    versionKey: false,
  }
);

const userModel = new mongoose.model("Registered_User", UserSchema);

module.exports = { userModel };
