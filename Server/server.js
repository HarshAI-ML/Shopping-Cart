const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/products.js');
const checkoutRoute = require('./routes/checkout.js');

const app = express();
app.use(cors());
app.use(express.json());

// Use product routes
app.use('/api/products', productRoute);
app.use('/api/checkout', checkoutRoute);

// Start server only when executed directly (not when imported by tests)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;