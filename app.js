const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});