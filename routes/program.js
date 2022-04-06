const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
const { add } = require("../controllers/program");


router.post(
    "/add",
    // isSignedIn,
    //isAdmin,
    add
);

module.exports = router;