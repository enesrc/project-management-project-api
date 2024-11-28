require("express-async-errors");
require('dotenv').config();
const express = require("express")
const path = require("path")

const models = require('./src/models/mysql');
const routes = require('./src/routes');
const errorHandlerMiddleware = require("./src/middlewares/errorHandler.js");

const cors = require("cors");
const corsOptions = require("./src/helpers/corsOptions.js");

const app = express()
const port = process.env.PORT || 5001

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

app.use(cors(corsOptions))

app.use('/', routes);

models.syncDatabase();

//Hata yakalama
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Server is up`);
})