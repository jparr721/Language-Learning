const express = require('express');

var app = express();

app.get('/', () => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  
});
