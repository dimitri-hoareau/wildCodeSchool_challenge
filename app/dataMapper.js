const client = require('./client');

const dataMapper = {

    getAllCrewMember: callback => {
        client.query('SELECT * FROM crew ORDER BY name', callback);
    },

    addNewMember: (data, callback) => {
        // On insère simplement les nouvelles données
        // Si je ne précise pas la liste de champs alors je doit donné 
        // une valeur pour CHAQUE colonne en suivant l'ordre de création de la 
        // base (voir promo+student.sql)
        // Je n'oublie d'utiliser le système de variable de requête !
        client.query('INSERT INTO crew VALUES ($1)', [data], callback);
    }

};

module.exports = dataMapper;