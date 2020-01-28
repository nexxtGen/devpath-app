const express = require('express');
const dotenv = require('dotenv');

// Route files
const flashcards = require('./routes/flashcards');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routes
app.use('/api/v1/flashcards', flashcards);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
