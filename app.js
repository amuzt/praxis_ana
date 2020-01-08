const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    return res.send(`Hello World from Praxis`)
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
    rusuk = parseFloat(req.body.rusuk)
    volume = rusuk * rusuk * rusuk
    /**
     * Check data type of all variable
     */
    console.log(typeof rusuk)
    console.log(typeof volume)


    return res.send(`Hasil volume kubus adalah ${volume}`)
})

app.post('/user', (req, res) => {
    let user = req.body.user
    return res.send(`Welcome back again ${user}`)
})


app.post('/lingkaran', (req, res) => {
    var phi, jarijari, lingkaran
    /**
     * Data type of variable a & b must be number, not string
     */
    phi = parseFloat(req.body.phi)
    jarijari = parseFloat(req.body.jarijari)
    lingkaran = phi * jarijari * jarijari
    /**
     * Check data type of all variable
     */
    console.log(typeof phi)
    console.log(typeof jarijari)
    console.log(typeof lingkaran)


    return res.send(`Hasil luas lingkaran adalah ${lingkaran}`)
})

app.post('/pembulatan', (req, res) => {
    /**
     * Data type of variable a & b must be number, not string
     */
    angka = parseFloat(req.body.angka)
    angka2 = Math.ceil(angka)
    return res.send(`Hasil pembulatan adalah ${angka2}`)
})

app.post('/apaya', (req, res) => {
    /**
     * Data type of variable a & b must be number, not string
     */
    angka = parseFloat(req.body.angka)
    angka2 = Math.cbrt(angka)
    return res.send(`Hasil cubic root adalah ${angka2}`)
})

app.post('/user/userid', function (req, res) {
    var user
    user = parseInt(req.body.user)
    res.send(`Selamat datang ${user}`)
})

app.post('/date', function (req, res) {
    var tanggal = new Date()
    var tanggal2 = tanggal.toDateString()
    res.send(`Anda mengunjungi situs ini pada , ${tanggal2}`)
})


var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.get('/example', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from D!')
})


app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})