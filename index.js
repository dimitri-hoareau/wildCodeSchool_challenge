const express = require('express');

const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'app/views');

app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(3000);