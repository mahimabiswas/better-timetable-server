const Notice = require('../models/notice');


exports.add = async (req, res) => {
    const { body } = req.body;


    if (body.length < 20) {
        return res.status(400).json({
            success: false,
            err: "Notice too small",
        });
    }

    const notice = new Notice({
        email: req.auth.email,
        body,
        date
    });

    notice.save((err, _) => {
        if (err) {
            return res.status(500).json({
                success: false,
                err: "Not able to add notice",
            });
        } else {
            res.status(200).json({
                success: true
            });
        }
    });
}


exports._delete = async (req, res) => {
    try {
        const { id } = req.body;

        const notice = await Notice.findOneAndDelete({ id });
        return res.status(200).json({
            notice
        });
    } catch (e) {
        return res.status(500);
    }
};


exports.get = async (req, res) => {
    try {
        const notice = await Notice.find({});
        return res.status(200).json({
            notice: notice
        });
    } catch (e) {
        return res.status(500);
    }
}