const express = require("express");
const app = express();

//mongodb+srv://admin:CfT2uwGNibdRePD@mern.desnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => {
  res.send("Hello a/A!");
}); 

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`))