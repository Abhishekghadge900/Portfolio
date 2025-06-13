const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();
const contactUSRoute = require("../Route/Contact"); // Keeping original path
const connectDB = require("../config/database");    // Keeping original path

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Connect to DB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send("Welcome to the server");
});

app.use("/api/v1/reach", contactUSRoute);

// Export handler for serverless
module.exports.handler = serverless(app);

// Keep the local development server
if (process.env.NODE_ENV !== 'production') {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
}