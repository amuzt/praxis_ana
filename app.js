const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)

    return res.send(`Hasil pertambahan adalah ${c}`)
})

app.post('/persegi', (req, res) => {
    var panjang, lebar, luas
    /**
     * Data type of variable a & b must be number, not string
     */
    panjang = parseInt(req.body.panjang)
    lebar = parseInt(req.body.lebar)
    luas = panjang * lebar

    /**
     * Check data type of all variable
     */
    console.log(typeof panjang)
    console.log(typeof lebar)
    console.log(typeof luas)

    return res.send(`Hasil luas persegi adalah ${luas}`)
})

app.post('/kubus', (req, res) => {
    var rusuk, volume
    /**
     * Data type of variable a & b must be number, not string
     */
    rusuk = parseInt(req.body.rusuk)
    volume = rusuk * rusuk * rusuk
    /**
     * Check data type of all variable
     */
    console.log(typeof rusuk)
    console.log(typeof volume)


    return res.send(`Hasil volume kubus adalah ${volume}`)
})

app.post('/user/userid', function (req, res) {
    var user 
    user = parseInt(req.body.user)
    res.send(`Selamat datang ${user}`)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})