const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const apiServerHost = 'https://api.binance.com/';
app.use(cors());
app.use('/', (req, res) => {
  const url = apiServerHost + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 8090);