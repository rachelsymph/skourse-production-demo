const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/authentication');
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 8000;

// Data Parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/users', users);
app.use('/login', auth);

// Database Connection
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log('connected to DB');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
