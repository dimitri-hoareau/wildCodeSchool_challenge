const client = require('./client');

const dataMapper = {

    getAllCrewMember: callback => {
        client.query('SELECT * FROM crew ORDER BY name', callback);
    },

};

module.exports = dataMapper;