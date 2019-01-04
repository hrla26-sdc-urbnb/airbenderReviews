const express = require('express');

const port = 6969;

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', router);


app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log('sucessfully listening on port', port));
