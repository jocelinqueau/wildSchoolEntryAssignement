const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRouter = require("./routes/tasks");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successfully");
});
app.use("/task", taskRouter);

app.listen(port, console.log(`app running on port: ${port}`));
