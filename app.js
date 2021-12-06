const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Connected to mongoDb"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const user = new User ({
    handle: "james",
    email: "james@james.com",
    password: "password"
  })
  user.save()
  res.send("Hello a/A!");
}); 

app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`))