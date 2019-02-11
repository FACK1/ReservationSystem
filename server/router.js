const express = require('express');
const { login } = require('./controllers/login.js');
const { logout } = require('./controllers/login.js');

const router = express.Router();
const { getEvents } = require('./controllers/getEvents.js');

router.get('/events', getEvents);
router.post('/login', login);
router.get('/logout', logout);
module.exports = router;
