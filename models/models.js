const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

let bookSchema  = new Schema ({
    bookId      : Number,
    title       : String,
    author      : String,
    year        : String,
    publisher   : String
})

let Book = mongoose.model("Book", bookSchema)

module.exports = Book
