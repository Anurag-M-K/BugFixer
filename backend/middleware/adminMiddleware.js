const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const adminToken = req.headers.authorization;
  console.log("adminToken", adminToken);

  jwt.verify(adminToken, "adminSecret", (err, decoded) => {
    if (err){
      console.log(err)
      return res.status(403).json({
        message: "access token is not valid",
      });
    }
    next();
  });
};

exports.verifyJWT = verifyJWT;
