const ENV = require('dotenv').config().parsed;
const express = require('express');

const app = express();

app.listen(ENV.PORT,
    () => console.log(`Server is running on ${ ENV.HOST }:${ ENV.PORT }`)
);
