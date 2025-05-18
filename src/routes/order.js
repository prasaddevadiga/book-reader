const express = require('express');
const {
  rentBook, returnBook, purchaseBook, getOrders
} = require('../controllers/orderController');
const { authenticate } = require('../middlewares/auth');
const router = express.Router();

router.post('/rent', authenticate, rentBook);
router.post('/return', authenticate, returnBook);
router.post('/purchase', authenticate, purchaseBook);
router.get('/', authenticate, getOrders);

module.exports = router;
