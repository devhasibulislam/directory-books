/**
 * Title: Books controller
 * Description: Integrate majority of books controller
 * Author: Hasibul Islam
 * Date: 05/09/2022
 */

// external import
const fs = require("fs");

// Get parsed data from buffered data
function getParsedData() {
    const bufferedData = fs.readFileSync(__dirname + "/../public/books.json");
    const parsedData = JSON.parse(bufferedData);

    return parsedData;
}

// Fetch all books
const fetchAllBooks = (req, res) => {
    const parsedBooks = getParsedData();

    res.status(200).json({
        success: true,
        message: "successfully fetch all books",
        data: parsedBooks
    })
}

// Insert a new book
const insertABook = (req, res) => {
    // const newBook = req.body;
    // const parsedBooks = getParsedData();

    res.status(200).json({
        success: true,
        message: "successfully insert a new book",
        data: "N/A"
    })
}

// Fetch a require book
const fetchABook = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully fetched the require book",
        data: "N/A"
    })
}

// Update a require book
const updateABook = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully update the require book",
        data: "N/A"
    })
}

// Delete a require book
const deleteABook = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully delete the require book",
        data: "N/A"
    })
}

module.exports = {
    getAllBooks: fetchAllBooks,
    insertABook,
    fetchABook,
    updateABook,
    deleteABook
};