const express = require("express");
const { generateToken, handlePostRequest } = require("../controllers/authController");
const router = express.Router();

router.get("/token", generateToken);
router.post("/", handlePostRequest);

module.exports = router;