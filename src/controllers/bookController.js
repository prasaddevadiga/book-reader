const pool = require('../db');

exports.addBook = async (req, res) => {
  const { title, author, price, rent_price_7, rent_price_15, rent_price_30 } = req.body;
  const result = await pool.query(`
    INSERT INTO books (title, author, price, rent_price_7, rent_price_15, rent_price_30)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
  `, [title, author, price, rent_price_7, rent_price_15, rent_price_30]);

  res.json({ message: 'Book added', book: result.rows[0] });
};

exports.getAllBooks = async (req, res) => {
  const result = await pool.query('SELECT * FROM books WHERE available=TRUE');
  res.json(result.rows);
};
