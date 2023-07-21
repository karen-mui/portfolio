require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const {PORT} = process.env;

// routes import
const portfolio = require('./routes/portfolio')

const app = express();

// middleware setup
app.use(logger("dev"));
app.use(bodyParser.json());

app.use('/portfolio', portfolio)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));