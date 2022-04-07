const mongoose = require("mongoose");

const noticeList = new mongoose.Schema({
    userid: {
        type: Object.id,
        required: true,
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
},    {
    timestamps: true,
});

module.exports = mongoose.model('noticeList', noticeListSchema);
