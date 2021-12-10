const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

app.get('/', (req, res) => {
    res.send('We are home')
})

mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to db')
)

app.listen(5000);
