const express = require("express");
const { mongoose } = require("mongoose");
const path = require('path');
require("dotenv").config();

// Database
const config = require("./config/database");

// Import Routes
const userRoutes = require('./routes/userRoutes')
const photoRoutes = require('./routes/photoRoutes')

const app = express();

// Connect to MongoDB
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;
// Check Connection
db.once("open", () => {
  console.log("Conected to MongoDB");
});
// Check for errors
db.on("error", (err) => {
  console.error(err.stack);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', userRoutes);
app.use('/photos', photoRoutes);

// Handle Non existent Routes
app.get('*', (req, res) => {
  res.send('This route does not exist.')
})

// Set up Server port
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
