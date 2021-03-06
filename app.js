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

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

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
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

// Starting server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
