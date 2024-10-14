require('dotenv').config();
const express = require("express")
const path = require("path")

const routes = require('./src/routes'); 

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}..`);
})