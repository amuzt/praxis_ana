const express = require('express')
const app = express()
const http = require('http').Server(app)
require('./db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes/main')(app)

app.get('/', (req, res) => {

    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})