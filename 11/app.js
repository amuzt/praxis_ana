const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = process.env.PORT || 3000
require('./db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes/main')(app)


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})