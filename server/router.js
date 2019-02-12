const express = require('express');
const { login } = require('./controllers/login.js');
const { logout } = require('./controllers/login.js');
const { getEvents } = require('./controllers/getEvents.js');
const { auth } = require('./middlewares/auth');

const router = express.Router();


router.post('/login', login);
router.get('/logout', logout);
router.get('/events', auth, getEvents);
module.exports = router;
