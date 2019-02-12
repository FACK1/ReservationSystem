const { Event } = require('../database/models');

exports.getEvents = ((req, res, next) => {
  // Event.create({
  //   title: 'Interview',
  //   start_date: 'Mon, 11 February 2019 13:30:00',
  //   end_date: 'Tue, 12 February 2019 13:30:00',
  //   org_name: 'YDRC',
  //   price: 120,
  //   capacity: 50,
  //   note: 'The book is for the interview',
  //   status: 0,
  // }).then((result) => {
  //   console.log(result);
  // });
  Event.findAll()
    .then((events) => {
      if (!events || events.length === 0) return res.status(401).json({ message: 'no data exists' });
      return res.json(events);
    })
    .catch((err) => {
      next(err);
    });
});
