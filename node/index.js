const express = require('express');
const sum = require('./lib/sum');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from sample Node app', uptime: process.uptime() });
});

app.get('/sum', (req, res) => {
  const a = Number(req.query.a) || 0;
  const b = Number(req.query.b) || 0;
  res.json({ a, b, sum: sum(a, b) });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

module.exports = app;
console.log("hello from NodeJS")