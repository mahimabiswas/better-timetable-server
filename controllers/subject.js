const subject = require("../models/subject");
const Subject = require("../models/subject");
// TODO: update

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

exports._delete = async (req, res) => {
    try {
        const { id } = req.body;
        const subjects = await Subject.findByIdAndDelete(id);
        return res.status(200).json({ subjects });
    } catch (e) {
        return res.status(500);
    }
};

exports.update = async (req, res) => {
    try {
        const { id, shortName, longName, type, programId } = req.body;
            const subject = await Subject.findByIdAndUpdate( id,{$set:{shortName, longName, type, programId }},{new:true} );
        return res.status(200).json({ subject });
    } catch (e) {
        return res.status(500);
    }
}

exports.getElectives = async (req, res) => {
    try {
        let result =[]
        const { batchId } = req.body;
        const subjects = await Subject.find( {batchId} );
        for(i=0;i<subjects.length;i++)
        {
            if(subjects[i].type == 1)
            result[i]={shortName:subjects[i].shortName, longName:subjects[i].longName, id:subjects[i]._id}
        }
        return res.status(200).json({ result:result })
    } catch (e) {
        return res.status(500);
    }
}