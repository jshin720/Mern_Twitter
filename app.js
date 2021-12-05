const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");


mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Conneted to mongoDb"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello a/A!");
}); 

app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`))