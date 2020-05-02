const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config({ path: './config/config.env' });

connectDB();

const auth = require('./routes/auth');
const profile = require('./routes/profile');
const flashcards = require('./routes/flashcards');
const flashcardsCategories = require('./routes/flashcardsCategories');
const jobs = require('./routes/jobs');
const companies = require('./routes/companies');
const learnItems = require('./routes/learnItems');
const learnCategories = require('./routes/learnCategories');
const kanbanCollections = require('./routes/kanbanCollections');
const boards = require('./routes/boards');
const lanes = require('./routes/lanes');
const notes = require('./routes/notes');

const app = express();

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Mount Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/profile', profile);
app.use('/api/v1/flashcards', flashcards);
app.use('/api/v1/flashcards-categories', flashcardsCategories);
app.use('/api/v1/jobs', jobs);
app.use('/api/v1/companies', companies);
app.use('/api/v1/learn-items', learnItems);
app.use('/api/v1/learn-categories', learnCategories);
app.use('/api/v1/kanban-collections', kanbanCollections);
app.use('/api/v1/boards', boards);
app.use('/api/v1/lanes', lanes);
app.use('/api/v1/notes', notes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
