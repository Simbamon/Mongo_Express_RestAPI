const express = require('express');
const app = express();
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())

const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
