const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
require('dotenv').config();
app.use(express.json());
const contactUSRoute = require("./Route/Contact");
const connectDB = require("./config/database");
const mongoose = require('mongoose');
app.use(
	cors({
		origin: process.env.Frontend_URL || "http://localhost:5173",
		credentials: true,
	})
);
connectDB();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5 // limit each IP to 5 requests per windowMs
});

// Apply to contact route
app.use("/api/v1/reach/contact", limiter);

// Contact API route
app.use("/api/v1/reach", contactUSRoute);

// Catch-all route LAST
app.use("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Reach API",
        status: "success"
    });
});

app.listen(process.env.PORT || 3000, () => {
    //console.log(`Server is running on port ${process.env.PORT || 3000}`);
});