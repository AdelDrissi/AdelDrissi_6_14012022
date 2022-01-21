const express = require('express');
const app = express();
const port = 3000;

const sauces = require('./models/sauces');

app.post('/signup', () => console.log('Tu as cliqué sur signup'));

app.get('/', (req, res) => {
  res.json(sauces);
});

app.listen(port, () => {
  console.log(
    "Cette app tourne actuellement à l'adresse http://localhost:" + port
  );
});
