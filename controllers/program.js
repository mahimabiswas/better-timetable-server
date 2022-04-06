const Program = require("../models/program");



exports.add = async (req, res) => {
   

    const {
        shortName,
        longName
    } = req.body;


   


    const program = new Program({
        shortName,
        longName
    });

    program.save(async (err, params) => {
        if (err) {
            return res.status(400).json({
                err: "NOT able to save program in DB"
            });
        }

        return res.json({
            id: program._id
        });
    });
};

//
exports.get