const Batch = require("../models/batch");

exports.add = async (req, res) => {
    const { shortName, longName, programId, divisions } = req.body;

    const batch = new Batch({
        shortName,
        longName,
        programId,
        divisions
    });

    batch.save(async (err) => { // remove the param (to review)
        if (err) {
            console.log(err);
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

exports.update = async (req, res) => {
    try {
        const { id, shortName ,longName, programId, divisions} = req.body;   
        const batch = await Batch.findByIdAndUpdate( id,{$set:{shortName ,longName, programId, divisions}},{new:true} );
        return res.status(200).json({ batch });
    } catch (e) {
        return res.status(500);
    }
}

exports._delete = async (req, res) => {
    try {
        const { id } = req.body;
        const batch = await Batch.findByIdAndDelete(id);
        return res.status(200).json({ batch });
    } catch (e) {
        return res.status(500);
    }
}