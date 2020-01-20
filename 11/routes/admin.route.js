const express = require('express')
const router = express.Router()
// const { Create, Get_all, Details, Edit, Destroy } = require('../actions/users/CRUD.action')
const Create = require('../actions/admin/create')
const { Get_all, Details} = require('../actions/admin/read')
const Edit = require('../actions/admin/update')
const Destroy = require('../actions/admin/delete')
const { check, validationResult, body } = require('express-validator')

router.post('/create', 
[
    check('name')
    .not()
    .isEmpty(),
    check('username')
    .not()
    .isEmpty(),
    check('email')
    .not()
    .isEmpty(),
    check('gender')
    .not()
    .isEmpty(),
    check('phone')
    .not()
    .isEmpty(),
    check('password')
    .not()
    .isEmpty()
    .isLength({ min: 6 }), 
    body('password_confirmation').custom((value, {req}) => {
        if(value != req.body.password){
            throw new Error("Password confirmation doesn't match 😱")
        } else {
            return value
        }
    }) 
],

async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.send({
            code: 400,
            status: 'error',
            message: errors.array()
        })
    } try {
        let data = await new Create(req).exec()
        return res.send({
            code: 201,
            status: 'Success',
            message: 'Yeay! admin account has created successfully 😉',
            data
        })

        } catch(err){
            return res.send({
                code: 400,
                status:'Awww something went wrong 😱',
                message: err.message
            }) 
        }
    })


router.get('/list', async (req, res) => {
    try {
        let data = await new Get_all().exec()
        return res.send({
            code: 200,
            status: "Hey buddy! these are admin's account data 😉",
            data
        })
    } catch(err) {
        return res.send({
            code: 400,
            status: 'Awww something went wrong 😱',
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        
        let data = await new Details(req).exec()

        return res.send({
            code: 200,
            status: "Here is the details of admin's account data 😉",
            data
        })
    } catch(err) {
        return res.send({
            code: 400,
            status: 'Awww something went wrong 😱',
            messsage: err.message
        })
    }
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let updatedData = {
        name: req.body.name,
        phone: req.body.phone,
    }

    try {
        let data = await new Edit(id, updatedData).exec()

        return res.send({
            code: 200,
            status: "Success",
            message: "Yoo, you have updated admin's data successfully 😉",
            data
        })
    } catch(err) {
        return res.send({
            code: 400,
            status: 'Awww something went wrong 😱',
            messsage: err.message
        })
    }
})

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await new Destroy(id).exec()

        return res.send({
            code: 200,
            status: "Success",
            message: "Here we go, admin's account has deleted 😉",
            data
        })
    } catch(err) {
        return res.send({
            code: 400,
            status: 'Awww something went wrong 😱',
            messsage: err.message
        })
    }
})

module.exports = router