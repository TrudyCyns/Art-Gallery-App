const express = require("express");

// Import Controller
const apiController = require("../controllers/apiController");

const router = express.Router();

// Routes
router.route("/users/new").post(apiController.createUser);
router.route("/users").get(apiController.getAllUsers);

module.exports = router;
