const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./lib/db");

dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => { console.log("API RUNNING");
    res.send("API Running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`)
});