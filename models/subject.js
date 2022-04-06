const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    shortName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: { unique: true },
    },
    longName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    type: {
        type: Number,
        required: true,
    },
    program: {
        // program id
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Subject', subjectSchema);
