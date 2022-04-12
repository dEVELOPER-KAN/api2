const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport')
const ProductRoute = require('./Routes/ProductRoute')
require('./Auth')
app.use(express.json())
app.use(express.urlencoded({extended:'false'}))
app.use(bodyParser.json());
app.use('/products', passport.authenticate('apikey', { session: false }),ProductRoute)
module.exports = app;