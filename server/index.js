const express = require('express');
const {fetchProductData, productUrlFetcher} = require('./fetchProductData');
const cors = require('cors'); // Import the cors module

const app = express();
// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());

// Endpoint for searching by SKU
app.get('/search/:sku', async (req, res) => {
  const { sku } = req.params;
  try {
    const productUrl = await productUrlFetcher(sku);
    const productData = await fetchProductData(productUrl);
    res.json(productData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product data' });
  }
});

// Server
app.listen(6000, () => {
  console.log('Server running on port 6000');
});
