/**
 * Title: Books directory
 * Description: Integrate majority of books directory
 * Author: Hasibul Islam
 * Date: 05/09/2022
 */

// external import
const express = require("express");

// internal import
const {
    getAllBooks: fetchAllBooks,
    insertABook,
    fetchABook,
    updateABook,
    deleteABook
} = require("../controller/books.controller");

// router level connection
const router = express.Router();

// method credentials
router.get("/", fetchAllBooks);
router.post("/insert", insertABook);
router.get("/:id", fetchABook);
router.put("/:id", updateABook);
<<<<<<< HEAD
router.delete("/:id", deleteABook);
=======
router.delete("/:id", deleteABook)
>>>>>>> 61c57048a1730c713e92d48c84977f9f7ff7a87d

module.exports = router;