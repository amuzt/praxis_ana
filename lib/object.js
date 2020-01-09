const manipulate = data => {
    let firstname, all;

    firstname = data.firstname;
    lastname = data.lastname;
    all = data;

    let result = {
        firstname,
        lastname,
        all
    };

    return result;
};

const merge = function(data, input) {
    //penulisan function biasa
    return data.concat(input);
};

const insert = (data, input) => {
    // penulisan function dengan arrow function
    data.push(input);
};

module.exports = {
    manipulate,
    merge: merge, //perbedaan eksport variable
    add: insert
};