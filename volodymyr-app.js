'use strict';

const express = require('express');

// константы
const port = 80;
const host = '0.0.0.0';

// приложение
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Volodymyr Osadchuk');
});

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});