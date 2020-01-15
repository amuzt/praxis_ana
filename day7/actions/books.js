const Book = require("../models/book");


const create = async req => {
    let {
        title,
        description,
        price
    } = req.body;
    price = parseInt(price);
    var insert_data = {
        title,
        description,
        price,
    };

    let data = new Book(insert_data);

    try {
        await data.save();

        return data;
    } catch (err) {
        throw err;
    }
};

const getAll = async () => {
    try {
        let query = await Book.find({}).exec();
        let data = query.map((v, i) => {
            return {
                title: v.title,
                description: v.description,
                price: v.price,
                _id: v._id,
                updated_at: new Date()
            };
        });

        return data;
    } catch (err) {
        throw err;
    }
};

const getDetail = async id => {
    try {
        let query = await Book.findOne({
            _id: id
        }).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

const update = async (id, updated_data) => {
    let { title, description, price, fresh } = updated_data;
    let opts = {
        new: true
    };
    let data = {
        title,
        description,
        price,
        updated_at: Date.now()
    };

    try {
        let query = await Book.findOneAndUpdate(
            {
                _id: id
            },
            data,
            opts
        ).exec();

        return query;
    } catch (err) {
        throw err;
    }
};


const destroy = async id => {
    try {
        let query = await Book.findOneAndDelete({
            _id: id
        }).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
};