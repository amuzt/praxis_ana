const User = require("../models/user");

const create = async req => {
    let { name, email, phone, bookId} = req.body;
    phone = parseInt(phone);
    var insert_data = {
        name,
        email,
        phone,
        bookId
    };

    let data = new User(insert_data);

    try {
        await data.save();

        return data;
    } catch (err) {
        throw err;
    }
};

const getAll = async () => {
    try {
        let query = await User.find({})
        .populate("bookId","title description price")
        .exec(err, result);
        let data = query.map((v, i) => {
            // return {
            //     name: v.name,
            //     email: v.email,
            //     phone: v.phone,
            //     books: {
            //         title: v.bookId.title,
            //         desc: v.bookId.description,
            //         price: v.bookId.price
            //     }

            // };

            console.log(v);
        });

        return data;
    } catch (err) {
        throw err;
    }
};

const getDetail = async id => {
    try {
        let query = await User.findOne({
            _id: id
        }).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

const update = async (id, updated_data) => {
    let { name, email, phone, fresh } = updated_data;
    let opts = {
        new: fresh === "true" ? true : false
    };
    let data = {
        name,
        email,
        phone
    };

    try {
        let query = await User.findOneAndUpdate(
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
        let query = await User.findOneAndDelete({
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
