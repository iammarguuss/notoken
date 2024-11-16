const express = require('express');
const app = express();
const port = 20000;  // Порт для hideserver

app.get('/', (req, res) => {
  res.send('This is hideserver');
});

app.listen(port, () => {
  console.log(`hideserver listening at http://localhost:${port}`);
});
