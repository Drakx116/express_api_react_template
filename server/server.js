const ENV = require('dotenv').config().parsed;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.listen(ENV.PORT,
    () => console.log(`Server is running on ${ ENV.HOST }:${ ENV.PORT }`)
);
