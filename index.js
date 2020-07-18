const express = require('express');

require('dotenv').config()

const router = require('./app/router');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', 'app/views');


app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(process.env.PORT || 3000, _ => {
    console.log(`Le server est accessible sur http://localhost:${process.env.PORT}`);
});

