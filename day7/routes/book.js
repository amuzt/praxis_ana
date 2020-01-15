const express = require("express");
const router = express.Router();
const {
    create,
    getAll,
    getDetail,
    update,
    destroy
} = require("../actions/books");

router.post("/", async (req, res) => {
    try {
        let data = await create(req);

        return res.status(200).json({
            status: "success",
            message: "Data buku berhasil disimpan di database !!",
            data
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "Gagal menyimpan data !!"
        });
    }
});

router.get("/", async (req, res) => {
    try {
        let data = await getAll();

        return res.send({
            status: "success",
            message: "Ini adalah keseluruhan data buku",
            data
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "Gagal mengambil data :("
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let data = await getDetail(id);

        return res.status(200).json({
            status: "success",
            message: "Berikut detail buku yang kamu mau",
            data
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "Gagal mengambil data buku"
        });
    }
});

router.put("/:id", async (req, res) => {
    let { id } = req.params;
    let updated_data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    };

    try {
        let data = await update(id, updated_data);

        return res.status(200).json({
            status: "success",
            data,
            message: "Data buku berhasil di update!",
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "Gagal memperbarui data buku!"
        });
    }
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params;

    try {
        let data = await destroy(id);

        return res.status(200).json({
            status: "success",
            message: "Book data deleted successfully!",
            data
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

module.exports = router;
