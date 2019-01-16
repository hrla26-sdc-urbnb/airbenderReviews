// converted schema for sequelize syntax
const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const airbenderMock = sequelize.define('airbendermock', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  finalstar: { type: Sequelize.INTEGER, allowNull: false },
  accuracystar: { type: Sequelize.INTEGER, allowNull: false },
  locationstar: { type: Sequelize.INTEGER, allowNull: false },
  checkinstar: { type: Sequelize.INTEGER, allowNull: false },
  cleanlinessstar: { type: Sequelize.INTEGER, allowNull: false },
  valuestar: { type: Sequelize.INTEGER, allowNull: false },
  communicationstar: { type: Sequelize.INTEGER, allowNull: false },
  userid: { type: Sequelize.INTEGER, allowNull: false },
  username: { type: Sequelize.STRING, allowNull: false },
  reviewcontent: { type: Sequelize.TEXT, allowNull: false },
  productid: { type: Sequelize.INTEGER },
  shijian: { type: Sequelize.STRING, allowNull: false },
  userpic: { type: Sequelize.STRING },
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