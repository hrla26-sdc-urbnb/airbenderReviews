const express = require('express');
const cors = require('cors');
const path = require('path');


const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);


app.use(express.static(path.join(__dirname, '../client/dist')));

// app.listen(port, () => console.log('sucessfully listening on port', port));

module.exports = app;