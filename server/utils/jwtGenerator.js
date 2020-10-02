require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtGenerator = (id) => {
  const payload = {
    user: id,
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "365d" });
};

module.exports = jwtGenerator;
