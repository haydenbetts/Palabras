const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
require('dotenv').config()

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../react-client/dist')));

app.use('/api', routes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))