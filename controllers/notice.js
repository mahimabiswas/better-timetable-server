const Notice = require('../models/notice');

exports.addNotice = async (req, res) => {
    const { body } = req.body;

    const notice = new Notice({ email: req.auth.email, body });

    notice.save((err, _) => {
        if (err) {
            return res.status(400).json({
                success: false,
                err: "NOT able to add notice",
            });
        } else {
            res.status(200).json({
                success: true
            });
        }
    });
}