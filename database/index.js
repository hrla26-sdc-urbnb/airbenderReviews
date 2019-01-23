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
// const sequelize = new Sequelize('airbenderreviews', 'ubuntu', 'password', {
const sequelize = new Sequelize('airbenderreviews', '', '', {
  dialect: 'postgres',
  logging: false,
  host: '13.58.112.63',
  port: 5432,
  logging: false,
  operatorsAliases: false,
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  },
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
