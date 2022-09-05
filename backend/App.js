const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const compression = require("compression");
const routeConfig = require("./routes/routes");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();

// Connect To DB
dotenv.config();
const mongoDb = process.env.MONGODB_URI;
mongoose.connect(
  mongoDb,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("DB Connected.");
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

// Routes
app.use("/", routeConfig);

app.listen(8080, () => console.log(`app listening on port ${PORT}`));
module.exports = app;
