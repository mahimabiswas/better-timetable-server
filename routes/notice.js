const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
const { noticePermission } = require("../controllers/staff");
const { addNotice } = require("../controllers/notice");


router.post(
    "/add",
    isSignedIn,
    isAdmin,
    // TODO: noticePermission, 
    addNotice
);

module.exports = router;