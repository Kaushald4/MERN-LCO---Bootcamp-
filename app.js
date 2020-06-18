require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = process.env.PORT || 8000;

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const authRoutes = require("./routes/auth");

//DB Connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected....");
  })
  .catch((error) => {
    console.log("DB GOT OPPS!", error);
  });

//My Routes
app.use("/api", authRoutes);

// Starting server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
