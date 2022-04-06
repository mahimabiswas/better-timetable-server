const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
const { add ,get, _delete} = require("../controllers/program");


router.post(
    "/add",
    // isSignedIn,
    //isAdmin,
    add
);
router.get(
    "/get",
    // isSignedIn,
    //isAdmin,
    get
);
router.delete(
    "/delete",
    // isSignedIn,
    //isAdmin,
    _delete
);

module.exports = router;