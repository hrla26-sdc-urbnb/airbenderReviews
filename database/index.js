// mysql connection setup
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"password",
//     database:"airbenderReviews"
// });
// connection.connect(err=>{
//     if (err) console.error(err);
//     console.log('connected to mysql!');
// });
// const pg = require('pg');

// const connectionString = 'postgres://postgres@localhost:2019/postgres';

const Sequelize = require('sequelize');

// const sequelize = new Sequelize('mysql://root:password@localhost/airbenderReviews');

// pg.connect(connectionString, err=>{
//       if (err) console.error(err);
//       console.log('connected to mysql!');
//   });
// 
const sequelize = new Sequelize('airbenderreviews', 'ubuntu', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  },
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
