require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('Mysql is connected successfully..');
    // Model senkronizasyonu
    return sequelize.sync();
  })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => console.error('Error while connecting Mysql: ', err));

module.exports = sequelize;

// require('dotenv').config();
// const mysql = require('mysql2');

// const mysqlConnection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// mysqlConnection.connect((err) => {
//   if (err) {
//     console.error('!!!Error while connecting Mysql: ' + err.stack);
//     return;
//   }
//   console.log('Mysql connected succesfully, connection ID: ' + mysqlConnection.threadId);
// });

// module.exports = mysqlConnection;