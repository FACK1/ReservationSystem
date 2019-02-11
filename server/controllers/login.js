const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { User } = require('../database/models');

const { SECRET } = process.env;

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({
    where: { username },
    raw: true,
  })
    .then((result) => {
      if (!result) {
        return res.status(401).json({ error: 'user not found' });
      }

      bcrypt.compare(password, result.password, (err, result2) => {
        if (err) {
          return res.status(401).json({ error: 'something went wrong!' });
        }
        if (result2) {
          const { id, role } = result;
          const token = jwt.sign({ id, username, role }, SECRET);
          return res.cookie('logged_in', token, { maxAge: 999999999 }).json({ token });
        }
        return res.status(401).json({ error: 'password does not match' });
      });
    })
    .catch(() => res.status(500).json({ error: 'error in query' }));
};

exports.logout = (req, res) => {
  res.clearCookie('logged_in');
};
