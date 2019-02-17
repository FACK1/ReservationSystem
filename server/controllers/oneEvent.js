const {
  Event, Coffee, Lunch, Equipment,
} = require('../database/models');

exports.oneEvent = ((req, res, next) => {
  const { id } = req.params;
  Event.findOne(
    { where: { id }, raw: true },
  ).then((event) => {
    Coffee.findOne(
      { where: { eventId: id }, raw: true },
    ).then((coffee) => {
      Lunch.findOne(
        { where: { eventId: id }, raw: true },
      ).then((lunch) => {
        Equipment.findOne(
          { where: { eventId: id }, raw: true },
        ).then((equipment) => {
          if (!event || event.length === 0) {
            return res.status(401)
              .json({ message: 'no data exists' });
          }
          return res.json({
            event, coffee, lunch, equipment,
          });
        });
      });
    });
  })
    .catch((err) => {
      next(err);
    });
});
