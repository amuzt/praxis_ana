const express   = require('express')
const app       = express()
require('./servers/db')

const index_routes = require('./routes/index')
const declare_book = require('./routes/book.routes')

app.use(express.urlencoded({ extended : true }))

app.use('/index', index_routes)
app.use('/book', declare_book)

app.listen(3300, () => {
    console.log('Example port to 3300')
})