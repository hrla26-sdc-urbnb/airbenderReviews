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

const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:password@localhost/airbenderReviews');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
