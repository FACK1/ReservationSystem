const express = require('express');
const { login } = require('./controllers/login.js');
const { logout } = require('./controllers/login.js');
const { getEvents } = require('./controllers/getEvents.js');
const { postEvent } = require('./controllers/postEvent.js');
const { approveEvent } = require('./controllers/approveEvent.js');
const { getEvent } = require('./controllers/getEvent.js');
const { auth } = require('./middlewares/auth.js');

const router = express.Router();

router.get('/events', auth, getEvents);
router.post('/login', login);
router.get('/logout', logout);
router.post('/event', auth, postEvent);
router.get('/event/:id', auth, getEvent);
router.put('/event/:id', auth, approveEvent);
module.exports = router;
