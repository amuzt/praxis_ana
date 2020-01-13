const express   = require('express')
const router    = express.Router()
const bookModel = require('../models/book.model')

// bookId     : Number,
// title       : String,
// author      : String,
// year        : String,
// press       : String

router.post('/create', async (req, res) => {
    let { bookId, title, author, year, publisher } = req.body
    let inputData = {
        bookId, title, author, year, publisher
    }

    let data = new bookModel(inputData)
    data.save()

    return res.send({
        status: "Success",
        message: "The information of book has submited",
        data 
        })
})

router.get('/getAll', async(req,res) => {
    let result = await bookModel.find({}).exec()

    res.send({
        status: 'Success',
        message: 'Those are the result.',
        result
    })
})

router.get('/:id', async(req,res) => {
    let { id } = req.params
    let data = await bookModel.findOne({ _id:id }).exec()

    return res.send({
        status: 'Success',
        message: "Here is your request",
        data
        })
})
module.exports = router