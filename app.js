require("dotenv").config();
require("module-alias/register");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

const courseRoutes = require("@routes/course");

app.use(cors());
app.use(bodyParser.json());

app.use("/course", courseRoutes);

app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Course API",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
