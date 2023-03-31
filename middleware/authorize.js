const authorize = (role_arr) => {
  
  return (req, res, next) => {
    const userrole = req.body.userrole;
    
    if (role_arr.includes(userrole)) {

      next();
    } else {

      res.status(401).json({ msg: "You are not Authorized!" });

    }
  };
};

module.exports = { authorize };
