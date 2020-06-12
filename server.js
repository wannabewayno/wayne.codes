require('dotenv').config();
// require dependencies
// ==============================================================================
const express = require('express');

// set up our express app
const app = express();
const PORT = process.env.PORT || 3141;

// Middleware
// ==============================================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the static Directory
app.use(express.static('public'));

// Routes
// ==============================================================================
const routes = require('./routes/index.routes');
routes(app);

// Start App
// ==============================================================================
app.listen(PORT, () => console.log(`app listening on ${PORT}`));