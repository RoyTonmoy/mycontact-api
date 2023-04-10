const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world" })
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})