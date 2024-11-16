const express = require('express');
const app = express();
const port = 21000;  // Порт для sideserver

app.get('/', (req, res) => {
  res.send('This is sideserver');
});

app.listen(port, () => {
  console.log(`sideserver listening at http://localhost:${port}`);
});
