const express = require('express')
const router = express.Router()
const {
     getBooks,
     getBook,
     addBook,
     updateBook,
     deleteBook
} = require('../controllers/BookController')

// router untuk menampilkan data
router.get('/', getBooks)

// router untuk mengirim data
router.post('/',addBook)

// route untuk menampilkan data berdasarkan id buku
router.get('/:id',getBook)

// route untuk memperbaharui/update data berdasarkan id buku
router.put('/:id', updateBook)

// route untuk menghapus data buku
router.delete('/:id', deleteBook)

module.exports = router