const express = require('express');

const router = require('./app/router');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(3000);