const express = require("express");
const router = express.Router();
const apiLimiter = require("../middleware/rateLimiter");

// apply rate limiter
router.use(apiLimiter);

router.get("/", (req, res) => {
    res.send("User data fetched successfully");
});

router.post("/", (req, res) => {
    res.send("User created successfully");
});

module.exports = router;