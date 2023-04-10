const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8001;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});