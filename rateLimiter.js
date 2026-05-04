const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // low limit for testing
    message: "Too many requests, please try again later"
});

module.exports = apiLimiter;