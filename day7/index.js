const express = require("express");
const app = express();
require("./config/db"); // database connection
/**
 * Import routes files
 */
const index_routes = require("./routes/index");
const book_routes = require("./routes/book");
const user_routes = require("./routes/user");

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.send(`Welcome to the jungle`);
});
/**
 * Set routes imported
 */
app.use("/index", index_routes);
app.use("/book", book_routes);
app.use("/user", user_routes);

app.listen(3000, () => {
    console.log(`Server running on port 3300`);
});
