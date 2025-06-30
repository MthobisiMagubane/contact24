const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

// Serve static files
// MUST BE FIRST
app.use(express.static(path.join(__dirname, "dist")));

// LAST: Wildcard for React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
