const mongoose = require('mongoose')
require('dotenv').config()
const host = process.env.HOST

mongoose.connect(host, {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
})

mongoose.set('useCreateIndex', true)