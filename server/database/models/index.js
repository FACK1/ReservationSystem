const Sequelize = require('./sequelize');
const User = require('./users');
const Event = require('./events');
const Coffee = require('./coffee');
const Lunch = require('./lunch');
const Equipment = require('./equipment');

Event.belongsTo(User, {
  onDelete: 'CASCADE', forignKey: 'user_id', targetKey: 'id',
});

Coffee.belongsTo(Event, {
  onDelete: 'CASCADE', forignKey: 'event_id', targetKey: 'id',
});

Lunch.belongsTo(Event, {
  onDelete: 'CASCADE', forignKey: 'event_id', targetKey: 'id',
});

Equipment.belongsTo(Event, {
  onDelete: 'CASCADE', forignKey: 'event_id', targetKey: 'id',
});

module.exports = {
  sequelize: Sequelize, User, Event, Coffee, Lunch, Equipment,
};
