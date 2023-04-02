require("dotenv").config();
const passport = require("passport");
const { userModel } = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

const GoogleStrategy = require("passport-google-oauth20").Strategy;



passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://lifecare-mwbk.onrender.com/appointments/google/auth/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      let email = profile._json.email;

      const user = new userModel({
        email,
        password: uuidv4(),
      });
      await user.save();
      return cb(null, user);

      //   console.log(profile);
    }
  )
);

module.exports = passport;
