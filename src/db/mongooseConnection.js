require('dotenv').config();
const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongodb connected'))
  .catch(err => console.error('Error while connecting mongodb: ', err));

module.exports = mongoose;