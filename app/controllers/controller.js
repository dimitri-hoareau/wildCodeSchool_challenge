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

  submitForm: (req, res) => {
        
    const memberName = req.body.name;
    console.log(memberName);

    dataMapper.addNewMember(memberName, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });


},

};

module.exports = controllers;