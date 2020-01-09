module.exports = (data) => {
    let length, first, second, last,all

    length = data.length // Total huruf termasuk spasi
    first = data[0] // Array data pertama
    second = data[1] // array data kedua
    last = data[length -1] // Array data terakhir
    all = data // Semua data
    
    let result = { // variable hasil
        length, first, second, last,
        all
    }

    return result // Panggil variable
}
