const Sequelize = require('sequelize');

require('env2')('config.env');

// init sequelize
const sequelize = new Sequelize(process.env.DB_URL, {
  logging: false,
  dialect: 'postgres',
});

module.exports = sequelize;
