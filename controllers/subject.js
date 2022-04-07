const Subject = require("../models/subject");

exports.add = async (req, res) => {
    const { shortName, longName, type, programId } = req.body;

    const subject = new Subject({
        shortName,
        longName,
        type,
        programId
    });

    subject.save(async (err, params) => {
        if (err) {
            return res.status(400).json({
                err: "NOT able to save subject in DB"
            });
        }

        return res.json({
            id: subject._id
        });
    });
};

exports.get = async (req, res) => {
    try {
        const { programId } = req.body;
        const subjects = await Subject.find({ programId });
        return res.status(200).json({ subjects });
    } catch (e) {
        return res.status(500);
    }
}