const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// Config dotenv
dotenv.config();

const app = express();

// Database config
const db_uri = process.env.MONGO_URI;

// Connect to mongodb
mongoose
    .connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

