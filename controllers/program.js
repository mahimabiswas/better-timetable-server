const Program = require("../models/program");

exports.add = async (req, res) => {
    const { shortName, longName } = req.body;

    const program = new Program({ shortName, longName });

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

exports.get = async (req, res) => {
    try {
        const programmes = await Program.find({});


        
        return res.status(200).json({ programmes: programmes });
    } catch (e) {
        return res.status(500);
    }
};

exports._delete = async (req, res) => {
    try {
        const { id } = req.body;
        const programmes = await Program.findByIdAndDelete(id);
        return res.status(200).json({ programmes: programmes });
    } catch (e) {
        return res.status(500);
    }
};


// TO REVIEW
exports.update = async (req, res) => {
    try {
        const { id, shortName, longName } = req.body;
        const program = await Program.findByIdAndUpdate(id, { $set: { shortName, longName } }, { new: true });
        return res.status(200).json({ program });
    } catch (e) {
        return res.status(500);
    }
}

exports.getById = async (req, res) => {
    try {
        const { id } = req.query;
        const program = await Program.findById(id);
        return res.status(200).json({ program });
    } catch (e) {
        return res.status(500);
    }
};