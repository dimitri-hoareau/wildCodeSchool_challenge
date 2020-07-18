const express = require('express');

const { Client } = require('pg');

const router = express.Router();

router.get('/', (req, res) => {

    const client = new Client();

    client.connect();

    client.query('SELECT * FROM crew ORDER BY name', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const crew = result.rows;
            res.render('index', {
                crew
            });
        }
        // On oublie pas de fermer la connexion
        client.end();
    });
});
module.exports = router;