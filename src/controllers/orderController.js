const pool = require('../db');

exports.rentBook = async (req, res) => {
  const { book_id, rent_days } = req.body;

  if (![7, 15, 30].includes(rent_days))
    return res.status(400).json({ error: 'Invalid rent duration' });

  const bookRes = await pool.query('SELECT * FROM books WHERE id=$1', [book_id]);
  const book = bookRes.rows[0];

  const rent_price = rent_days === 7 ? book.rent_price_7 :
                     rent_days === 15 ? book.rent_price_15 : book.rent_price_30;

  const rent_end = new Date(Date.now() + rent_days * 86400000);
  await pool.query(`
    INSERT INTO orders (user_id, book_id, type, rent_days, rent_end_date)
    VALUES ($1, $2, 'rent', $3, $4)
  `, [req.user.id, book_id, rent_days, rent_end]);

  res.json({ message: 'Book rented', rent_price });
};

exports.returnBook = async (req, res) => {
  const { order_id } = req.body;
  await pool.query(
    'UPDATE orders SET returned=TRUE WHERE id=$1 AND user_id=$2',
    [order_id, req.user.id]
  );
  res.json({ message: 'Book returned' });
};

exports.purchaseBook = async (req, res) => {
  const { book_id } = req.body;
  await pool.query(`
    INSERT INTO orders (user_id, book_id, type)
    VALUES ($1, $2, 'purchase')
  `, [req.user.id, book_id]);
  res.json({ message: 'Book purchased' });
};

exports.getOrders = async (req, res) => {
  const result = await pool.query(`
    SELECT o.*, b.title FROM orders o
    JOIN books b ON o.book_id = b.id
    WHERE user_id=$1
  `, [req.user.id]);
  res.json(result.rows);
};
