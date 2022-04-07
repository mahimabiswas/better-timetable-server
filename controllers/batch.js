const Batch= require("../models/batch");

exports.add = async (req, res) => {
    const { shortName, longName, programId } = req.body;

    const batch = new Batch({
        shortName,
        longName,
        programId
    });

    batch.save(async (err) => { // remove the param (to review)
        if (err) {
            return res.status(400).json({
                err: "NOT able to save subject in DB"
            });
        }

        return res.json({
            id: batch._id
        });
    });
};

exports.get = async (req, res) => {
    try {
        const { programId } = req.body;
        const batches = await Batch.find({ programId });
        return res.status(200).json({ batches });
    } catch (e) {
        return res.status(500);
    }
}
