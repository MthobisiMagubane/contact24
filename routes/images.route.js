const express = require("express");
const { companies } = require("../controllers/images.controller");

const images = express.Router();

images.get("/companies", companies);

module.exports = { images };
