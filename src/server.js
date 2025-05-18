const express = require('express');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/book');
const orderRoutes = require('./routes/order');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Book Reader backend is running');
});


app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
