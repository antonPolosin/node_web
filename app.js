const express = require('express');
const app = express();

const heroWorkoutsRoutes = require('./api/routes/heroWorkout');

app.use('/heroWorkout', heroWorkoutsRoutes);

module.exports = app;