const express = require("express");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => { console.log("API RUNNING");
    res.send("API Running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`)
});