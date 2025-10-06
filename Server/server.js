const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/products.js');
const checkoutRoute = require('./routes/checkout.js')
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Use product routes
app.use('/api/products', productRoute);
app.use('/api/checkout',checkoutRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});