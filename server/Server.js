require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const contactUSRoute = require("./Route/Contact");

const app = express();

// Vercel (and most hosts) sit behind a reverse proxy. Without this, req.ip is
// the proxy's address and the rate limiter buckets every visitor together.
app.set("trust proxy", 1);

app.use(express.json({ limit: "20kb" }));

// Comma-separated list of allowed origins, e.g.
// FRONTEND_URL=https://abhishek-ghadge.vercel.app,http://localhost:5173
const allowedOrigins = (process.env.FRONTEND_URL || process.env.Frontend_URL || "")
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean);
if (allowedOrigins.length === 0) {
    allowedOrigins.push("http://localhost:5173");
}

app.use(
    cors({
        origin(origin, callback) {
            // Allow non-browser clients (no Origin header) and listed origins.
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error("Not allowed by CORS"));
        },
        methods: ["GET", "POST"],
    })
);

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 5, // requests per IP per window
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many messages sent from this IP, please try again later.",
    },
});

app.use("/api/v1/reach/contact", contactLimiter);
app.use("/api/v1/reach", contactUSRoute);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Reach API", status: "success" });
});

// Anything else is a 404, not a fake success.
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

// CORS rejections and malformed JSON end up here.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    if (err.message === "Not allowed by CORS") {
        return res.status(403).json({ success: false, message: "Origin not allowed" });
    }
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({ success: false, message: "Invalid JSON body" });
    }
    console.error("Unhandled error:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
});

// On Vercel the exported app is wrapped by the platform; only listen locally.
if (!process.env.VERCEL) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;
