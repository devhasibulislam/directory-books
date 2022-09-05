/**
 * Title: Books controller
 * Description: Integrate majority of books controller
 * Author: Hasibul Islam
 * Date: 05/09/2022
 */

// external import
const fs = require("fs");

// global path
const path = __dirname + "/../public/books.json";

// get parsed data from buffered data
function getParsedData() {
    const bufferedData = fs.readFileSync(path);
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
    const newBook = req.body;
    const parsedBooks = getParsedData();
    parsedBooks.push(newBook);
    const stringifiedBooks = JSON.stringify(parsedBooks);

    fs.writeFileSync(path, stringifiedBooks);

    res.status(201).json({
        success: true,
        message: "successfully insert a new book",
    })
}

// Fetch a require book
const fetchABook = (req, res) => {
    const parsedBooks = getParsedData();
    const { id } = req.params;
    const requireBook = parsedBooks.find(book => book._id === Number(id));

    res.status(200).json({
        success: true,
        message: "successfully fetch the require book",
        data: requireBook
    })
}

// Update a require book
const updateABook = (req, res) => {
    const { id } = req.params;
    const bookInfo = req.body;
    const parsedBooks = getParsedData();
    const requireBook = parsedBooks.find(book => book._id === Number(id));

    parsedBooks[Number(id - 1)] = {
        _id: requireBook._id,
        title: bookInfo.title || requireBook.title,
        description: bookInfo.description || requireBook.description,
        isbn: bookInfo.isbn || requireBook.isbn,
        publish: bookInfo.publish || requireBook.publish,
        user: bookInfo.user || requireBook.user,
        avatar: bookInfo.avatar || requireBook.avatar,
        email: bookInfo.email || requireBook.email,
        phone: bookInfo.phone || requireBook.phone,
        gender: bookInfo.gender || requireBook.gender,
    };

    const stringifiedUpdateBook = JSON.stringify(parsedBooks);
    fs.writeFileSync(path, stringifiedUpdateBook);

    res.status(200).json({
        success: true,
        message: "successfully update the require book",
    })
}

// Delete a require book
const deleteABook = (req, res) => {
    const { id } = req.params;
    const parsedBooks = getParsedData();
    const elseDeletedBooks = parsedBooks.filter(book => book._id !== Number(id));
    const stringifiedBooks = JSON.stringify(elseDeletedBooks);

    fs.writeFileSync(path, stringifiedBooks);

    res.status(200).json({
        success: true,
        message: "successfully delete the require book",
    })
}

module.exports = {
    getAllBooks: fetchAllBooks,
    insertABook,
    fetchABook,
    updateABook,
    deleteABook
};