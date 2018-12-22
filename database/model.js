// converted schema for sequelize syntax
const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const airbenderMock = sequelize.define('airbenderMock', {
  finalStar: { type: Sequelize.INTEGER, allowNull: false },
  accuracyStar: { type: Sequelize.INTEGER, allowNull: false },
  locationStar: { type: Sequelize.INTEGER, allowNull: false },
  checkinStar: { type: Sequelize.INTEGER, allowNull: false },
  cleanlinessStar: { type: Sequelize.INTEGER, allowNull: false },
  valueStar: { type: Sequelize.INTEGER, allowNull: false },
  communicationStar: { type: Sequelize.INTEGER, allowNull: false },
  userId: { type: Sequelize.INTEGER, allowNull: false },
  userName: { type: Sequelize.STRING, allowNull: false },
  reviewContent: { type: Sequelize.TEXT, allowNull: false },
  productId: { type: Sequelize.INTEGER },
  shijian: { type: Sequelize.STRING, allowNull: false },
  userPic: { type: Sequelize.STRING },
},
{
  timestamps: false,
  freezeTableName: true,
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
});

airbenderMock.sync({
  // drop table if exists
})
  .then(() => console.log('synced model!'))
  .catch(err => console.error(err));

module.exports = airbenderMock;