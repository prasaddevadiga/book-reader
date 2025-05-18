const express = require('express');
const { addBook, getAllBooks } = require('../controllers/bookController');
const { authenticate, authorizeAdmin } = require('../middlewares/auth');
const router = express.Router();

router.post('/', authenticate, authorizeAdmin, addBook);
router.get('/', authenticate, getAllBooks);

module.exports = router;
