const { Client } = require('pg');

// On crée un client
const client = new Client();

// On connecte le client au serveur
// en se basant sur les variables d'environements (.env)
client.connect();

console.log('-- Client pg connecté');

// On rend le client accessible en dehors du fichier
// alors qu'il est déjà connecté !
// On pourra donc utiliser partout la connexion 
module.exports = client;