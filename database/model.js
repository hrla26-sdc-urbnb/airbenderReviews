// converted schema for sequelize syntax
const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const Reviews = sequelize.define('reviews', {
    finalStar: {type: Sequelize.INTEGER, allowNull: false},
    accuracyStar: {type: Sequelize.INTEGER, allowNull: false},
    locationStar: {type: Sequelize.INTEGER, allowNull: false},
    checkinStar: {type: Sequelize.INTEGER, allowNull: false},
    cleanlinessStar: {type: Sequelize.INTEGER, allowNull: false},
    valueStar: {type: Sequelize.INTEGER, allowNull: false},
    userId: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true},
    userName: {type: Sequelize.STRING, allowNull: false},
    reviewContent: {type: Sequelize.TEXT, allowNull: false},
    createdAt: {type: Sequelize.STRING, allowNull: false}
},
{
    timestamps: false
});

Reviews.sync()
    .then(()=>console.log('synced model!'))
    .catch(err=>console.error(err));

module.exports = Reviews;