const express = require('routes');

const router = express.Router();

//import from controller
const { signup } = require('./controllers/user');

router.post('/signup', signup);

module.exports = router;