const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');

const app = express();
mongoose.connect(keys.mongoURI, keys.mongoSetting)
  .then(() => console.log('MongoDB has been connected'))
  .catch(error => console.log(error));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('morgan')('dev'));
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;
