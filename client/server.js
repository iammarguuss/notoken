const express = require('express');
const app = express();
const port = 20500;  // Порт для client

app.get('/', (req, res) => {
  res.send('This is client');
}); 

app.listen(port, () => {
  console.log(`client listening at http://localhost:${port}`);
});
