const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const users = require('./routes/users');
const auth = require('./routes/authentication');

app.use(express.static('./forms'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', users);
app.use('/login', auth);

// CRUD - CREATE READ UPDATE AND DELETE

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true }, () => {
  console.log('connected to DB');
});

app.listen(8000, () => {
  console.log('server is listening to port 8000');
});
