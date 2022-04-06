const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
const { addStaff, getDetails } = require("../controllers/staff");


router.post(
    "/add",
    isSignedIn,
    isAdmin,
    addStaff
);

router.get(
    "/details",
    // isSignedIn,
    getDetails
);

module.exports = router;