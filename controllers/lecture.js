const Lecture= require("../models/lecture");

exports.add = async (req, res) => {
    const { staffId, subjectId, division,day,date,time,batchId} = req.body;

    const lecture= new Lecture({
        staffId,
        subjectId,
        division,
        day,
        date,
        time,
        batchId
    });

    lecture.save(async (err) => { // remove the param (to review)
        if (err) {
            return res.status(400).json({
                err: "NOT able to save lecture in DB"
            });
        }

        return res.json({
            id: lecture._id
        });
    });
};

exports._delete = async (req, res) => {
    try {
        const { id } = req.body;
        const lectures = await Lecture.findByIdAndDelete( id );
        return res.status(200).json({ lectures });
    } catch (e) {
        return res.status(500);
    }
}
exports.update = async (req, res) => {
    try {
        const { id,staffId, subjectId, division,day,date,time,batchId} = req.body;

        
    
            const lectures = await Lecture.findByIdAndUpdate( id,{$set:{staffId, subjectId, division,day,date,time,batchId}},{new:true} );
        return res.status(200).json({ lectures });
    } catch (e) {
        return res.status(500);
    }
}



// program, batch, div

exports.get = async (req, res) => {
    const { programId, batchId, division } = req.body
    const lectures = await Lecture.find({ id } );
}





