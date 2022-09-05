/**
 * Title: Books of directory
 * Description: Building a directory of books using rest api
 * Author: Hasibul Islam
 * Date: 05/09/2022
 */

// external import
const express = require("express");

// internal import
const router = require("./route/books.route");

// application level connection
const app = express();
const port = process.env.PORT || 3000;

// middleware connection
app.use(express.json());
app.use(express.static("public"));
app.use("/books", router);

// enable requests
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Books directory app listening on port ${port}`);
});