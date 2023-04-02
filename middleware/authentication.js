const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authentication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).send({ message: "Please Login first" });
    return;
  }

  
  const decoded = jwt.verify(token, process.env.key);
  
  const userrole = decoded?.role;
  // console.log("here", userrole);
  req.body.userrole = userrole;

  if (decoded) {
    req.body.user_id = decoded._id;
    next();
  } else {
    res.status(401).json({ msg: "Please login first" });
  }
};

module.exports = { authentication };
