const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const port = process.env.PORT || 8000;
const users = require('./routes/users');
const auth = require('./routes/authentication');

app.use(express.static('./forms'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', users);
app.use('/login', auth);

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true }, () => {
  console.log('connected to DB');
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
