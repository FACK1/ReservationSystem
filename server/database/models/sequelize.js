const Sequelize = require('sequelize');

require('env2')('config.env');

// init sequelize
const sequelize = new Sequelize(process.env.DB_URL, {
  logging: false,
  dialect: 'postgres',
  dialectOptions: {
    ssl: false,
  },
});

module.exports = sequelize;
