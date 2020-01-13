const express = require('express')
const router = express.Router()
const bookModel = require('../models/book.model')

// bookId     : Number,
// title       : String,
// author      : String,
// year        : String,
// press       : String


// CREATE DATA
router.post('/create', async (req, res) => {
    let {
        bookId,
        title,
        author,
        year,
        publisher
    } = req.body
    let inputData = {
        bookId,
        title,
        author,
        year,
        publisher
    }

    let data = new bookModel(inputData)
    data.save()

    return res.send({
        status: "Success",
        message: "Data buku berhasil dimasukkan, Yeay !!",
        data
    })
})

// READ ALL
router.get('/getAll', async (req, res) => {
    let result = await bookModel.find({}).exec()

    res.send({
        status: 'Success',
        message: 'Data buku yang telah berhasil disimpan',
        result
    })
})

// READ BY ID
router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params
    let data = await bookModel.findOne({
        _id: id
    }).exec()

    return res.send({
        status: 'Success',
        message: "Ini adalah data buku yang kamu mau",
        data
    })
})

// UPDATE DATA
router.put('/:id', function (req, res, next) {
    var data = {
        bookId: req.body.bookId,
        author: req.body.author,
        title: req.body.title,
        year: req.body.year,
        publisher: req.body.publisher


    }
    bookModel.findOneAndUpdate({
        '_id': req.params.id
    }, data, function (err, data) {
        if (err) res.json({
            'message': 'Yah , gagal :( '
        })
        else res.json({
            'message': 'Data buku berhasil diubah , yeay !!'
        });
    })
})

// DELETE DATA
router.delete('/:id', (req, res) => {
    const id = req.params.id
    bookModel.findByIdAndRemove(id)
        .then(data => res.send('Data berhasil dihapus'))
})


module.exports = router