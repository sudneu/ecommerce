const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const userRoutes = require('./routes/user');

//app
const app = express();

//port
const port = process.env.PORT || 8000;

app.use('/', userRoutes);

app.listen(port, () => {
	console.log(`Connection is made in port ${port}`);
})