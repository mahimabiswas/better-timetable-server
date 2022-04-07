const Notice = require('../models/notice')

exports.addNotice = async (req, res) => {
    const { userId, body } = req.body;
    


    const notice = await Notice.find({ user });

    if (notice.length) {
        return res.sendStatus(409);
    }

    const newNotice = new Notice({ userId, body });

    newNotice.save((err, notice) => {
        if (err) {
            return res.status(400).json({
                err: "NOT able to add notice"
            });
        } else {
            res.status(200).json({
                noticename: Notice.noticename
            });
        }
    });
}