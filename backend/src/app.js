
const express = require('express')
const app = express();


/* ROUTES */
app.use('/',  require('./routes/health'));
app.use('/persons', require('./routes/personRoute'));


module.exports = app;