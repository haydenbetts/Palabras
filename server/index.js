const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
app.use(express.static(path.join(__dirname, '../react-client/dist')));

const port = 3000



app.listen(port, () => console.log(`Example app listening on port ${port}!`))