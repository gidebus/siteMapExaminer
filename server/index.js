const express = require('express');
const fetchProductData = require('./fetchProductData');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint for searching by SKU
app.get('/search/:sku', async (req, res) => {
  const { sku } = req.params;
  try {
    const productData = await fetchProductData(sku);
    res.json(productData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product data' });
  }
});

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
