const express   = require('express')
const app       = express()
require('./servers/database')

const index_routes = require('./routes/index')
const declare_book = require('./routes/routes')

app.use(express.urlencoded({ extended : true }))

app.use('/index', index_routes)
app.use('/book', declare_book)

app.listen(3300, () => {
    console.log('Example port to 3300')
})
