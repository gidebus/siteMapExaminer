const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Set the views directory and the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Endpoint for searching by SKU
app.get('/search/:sku', async (req, res) => {
  const { sku } = req.params;
  try {
    // Call the external app to fetch the product data
    // You need to replace the externalAppBaseUrl with the actual URL of the server app
    const externalAppBaseUrl = 'http://localhost:6000';
    const response = await axios.get(`${externalAppBaseUrl}/search/${sku}`);
    const productData = response.data;

    res.json(productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching product data' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Client server running on http://localhost:3000');
});
