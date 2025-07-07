const path = require("path");
const fs = require("fs");
require("dotenv").config();

const companies = (req, res) => {
  const dirPath = path.join(__dirname, "../assets/images/companies");
  const files = fs.readdirSync(dirPath);
  const imageUrls = files.map(
    (file) => `http://localhost:${process.env.PORT}/images/companies/${file}`
  );
  res.json(imageUrls);
};

module.exports = { companies };
