const express = require('express')
const app = express()

app.get('/', (req, res) => {


    return res.send(`Hello World from Praxis Academy`)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})