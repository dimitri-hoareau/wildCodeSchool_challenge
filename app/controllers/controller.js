const dataMapper = require('../dataMapper');

const controllers = {

    index: (_, res) => {
        dataMapper.getAllCrewMember((err, result) => {
            if (err) {
                console.log(err);
            } else {
                const crew = result.rows;
                res.render('index', {
                    crew
                });
            }
    });
  },     

};

module.exports = controllers;