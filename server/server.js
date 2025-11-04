const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Dream big and dare to fail.",
  "Don’t let yesterday take up too much of today.",
  "It always seems impossible until it’s done."
];

app.get('/api/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(5000, () => console.log('✅ Server running on port 5000'));
