const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
const { add, get } = require("../controllers/subject");

router.post(
    "/add",
    
    add
);

router.get(
    "/get",

    get
);

module.exports = router;