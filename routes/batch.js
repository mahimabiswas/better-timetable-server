const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
const { add, get, _delete, update, getDivision } = require("../controllers/batch");


router.post(
    "/add",
    isSignedIn,
    isAdmin,
    add
);
router.get(
    "/get",
    // isSignedIn,
    // isAdmin,
    get
);
router.delete(
    "/delete",
    isSignedIn,
    isAdmin,
    _delete
);
router.put(
    "/update",
    isSignedIn,
    isAdmin,
    update
);

router.get(
    "/division",
    getDivision
);
module.exports = router;