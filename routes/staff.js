const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
const { addStaff, getDetails, update, _delete } = require("../controllers/staff");


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

router.put(
    "/update",
    isSignedIn,
    isAdmin,
    update
);

router.delete(
    "/delete",
    isSignedIn,
    isAdmin,
    _delete
);
module.exports = router;