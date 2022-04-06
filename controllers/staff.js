const Staff = require('../models/staff')

exports.addStaff = async (req, res) => {
    const { email, name, role, noticePermission } = req.body;


    const staff = await Staff.find({ email });

    if (staff.length) {
        return res.sendStatus(409);
    }

    const newStaff = new Staff({ email, name, role, noticePermission });

    newStaff.save((err, staff) => {
        if (err) {
            return res.status(400).json({
                err: "NOT able to save staff in DB"
            });
        } else {
            res.status(200).json({
                id: staff._id,
                name: staff.name,
                email: staff.email,
                role: staff.role,
                noticePermission: staff.noticePermission,
            });
        }
    });
}

exports.getDetails = async (req, res) => {
    const { email } = req.query;

    if (email) {
        const staff = await Staff.findOne({ email });

        res.status(200).json({
            email,
            name: staff.name,
            contactNumber: staff.contactNumber,
            role: staff.role,
            noticePermission: staff.noticePermission,
            createdAt: staff.createdAt,
            updatedAt: staff.updatedAt
        });
    } else {
        res.status(400).json({
            message: 'user email required'
        });
    }
}