const express = require("express")
const path = require("path")
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3001

app.get("/", (req, res) => {
    res.send("Main Page Test")
})

app.listen(port, () => {
    console.log(`Server is up on ${port} port..`);
})