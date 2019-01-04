
const express = require('express');
const path = require('path');
const parser = require('body-parser');

const port = 3000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true, }));
app.use(express.static(path.join(__dirname, './public/')));

app.listen(port, (err) => {
  if (err) {
    console.log('error listening on port ', port);
  } else {
    console.log('successfully listening on port ', port);
  }
});