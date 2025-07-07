const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const { images } = require("./routes/images.route");

const app = express();

app.use(cors());
app.use(express.json());

//Images
app.use("/images", express.static(path.join(__dirname, "assets/images")));
app.use(
  "/images/companies",
  express.static(path.join(__dirname, "assets/images/companies"))
);
// Serve static files
// MUST BE FIRST
app.use(express.static(path.join(__dirname, "dist")));

//API
app.use("/api/images", images);

// LAST: Wildcard for React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
