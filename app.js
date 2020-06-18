const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/tshirt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected....");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
