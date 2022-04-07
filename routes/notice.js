const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
const { addNotice, delNotice, getNotice } = require("../controllers/notice");


router.post(
    "/add",
    isSignedIn,
    isAdmin,
    // TODO: noticePermission, 
    addNotice
);

router.delete(
    "/deletenotice",
    isSignedIn,
    isAdmin, 
    delNotice
);

router.get(
    "/get",
    getNotice
);

module.exports = router;