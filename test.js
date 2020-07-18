const { Client } = require('pg');

// Injecte dans process.env les variables d'environement
// définit dans le fichier .env
require('dotenv').config()

const client = new Client();
client.connect();

client.query('SELECT * FROM crew', (err, result) => {
    console.log(err);
    console.table(result.rows);
    client.end();
}); 