const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.json());
const contactUSRoute = require("./Route/Contact");
const connectDB = require("./config/database");
const mongoose = require('mongoose');
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);
connectDB();



app.use("/api/v1/reach",contactUSRoute);

app.listen(process.env.PORT || 3000, () => {
    //console.log(`Server is running on port ${process.env.PORT || 3000}`);
});