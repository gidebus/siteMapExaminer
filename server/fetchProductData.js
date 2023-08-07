const axios = require('axios');
const cheerio = require('cheerio');

// Function to fetch and parse product data from the HTML content
async function fetchProductData(sku) {
  const url = 'https://www.christianbook.com/sitemap4.xml';
  const response = await axios.get(url);
  const xmlContent = response.data;

  // Use Cheerio to parse the XML content
  const $ = cheerio.load(xmlContent);

  // Find the <loc> elements that contain the URLs
  const locElements = $('loc');

  let productData = null;

  // Loop through the locElements to find the matching SKU
  for (let i = 0; i < locElements.length; i++) {
    const locUrl = $(locElements[i]).text();
    if (locUrl.endsWith(`/${sku}`)) {
      // Fetch the product page and scrape the book information
      const productPageResponse = await axios.get(locUrl);
      const productPageHtml = productPageResponse.data;
      // console.log(productPageHtml);
      const bookUrl = cheerio.load(productPageHtml);

      let title = bookUrl('h1', productPageHtml).text().trim();
      let author = bookUrl('a.CBD-ProductDetailAuthorLink', productPageHtml.data).first().text().trim();
      let price = bookUrl('span.CBD-ProductDetailActionPrice', productPageHtml.data).text().trim();
      price = price.split('$');
      price = price[1];

      productData = { title, author, price };
      break; // Stop the loop since we found the matching SKU
    }
  }

  return productData;
}

module.exports = fetchProductData;