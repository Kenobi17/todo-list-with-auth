require("dotenv").config();
const express = require("express"),
  db = require("./database/db"),
  cors = require("cors"),
  PORT = process.env.PORT || 4000,
  app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES

//Register and login routes
app.use("/auth", require("./routes/jwAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.listen(4000, () => {
  console.log("Server up at http://localhost:4000");
});
