CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role VARCHAR(10) DEFAULT 'user'
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  author VARCHAR(100),
  price NUMERIC,
  rent_price_7 NUMERIC,
  rent_price_15 NUMERIC,
  rent_price_30 NUMERIC,
  available BOOLEAN DEFAULT TRUE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  book_id INT REFERENCES books(id),
  type VARCHAR(10), -- 'purchase' or 'rent'
  rent_days INT,
  rent_end_date TIMESTAMP,
  returned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
