require("dotenv").config();
const jwt = require("jsonwebtoken");

const middleware = {
  isAuthorized: async (req, res, next) => {
    const jwToken = req.header("token");
    if (!jwToken) {
      return res.status(403).json("Please login first");
    }
    try {
      const payload = jwt.verify(jwToken, process.env.jwtSecret);
      req.user = payload.user;
      next();
    } catch (err) {
      return res.status(401).json("Token not valid");
    }
  },

  isValidInfo: (req, res, next) => {
    const { email, name, password } = req.body;
    validEmail = (userEmail) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    };
    if (req.path === "/register") {
      if (![email, name, password].every(Boolean)) {
        return res.status(422).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(422).json("Invalid Email");
      }
    } else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(422).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(422).json("Invalid Email");
      }
    }

    next();
  },
};

module.exports = middleware;
