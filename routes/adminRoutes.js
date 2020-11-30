const express = require("express");
const { model } = require("mongoose");
const router = express.Router();

const blogController = require("../controllers/adminController");

router.get("/", blogController.index);

module.exports = router;
