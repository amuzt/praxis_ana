const manipulate = data => {
    let firstname, all;

    firstname = data.firstname;
    all = data;

    let result = {
        firstname,
        all
    };

    return result;
};

const merge = function(data, input) {
    //penulisan function biasa
    return data.concat(input);
};

const insert = (data, input) => {
    // penulisan function dengan arrow funtction
    data.push(input);
};

module.exports = {
    manipulate,
    merge: merge, //perbedaan eksport variable
    add: insert
};