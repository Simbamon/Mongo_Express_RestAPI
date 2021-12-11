const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
)

app.listen(5000);
