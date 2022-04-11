const express = require("express");
const router = express.Router();

// const { isSignedIn, isAdmin } = require("../controllers/auth");
const { add, get, _delete, update, getElectives } = require("../controllers/subject");

router.post(
    "/add",
    add
);

router.get(
    "/get",
    get
);

router.delete(
    "/delete",
    _delete
);

router.put(
    "/update",
    update
);

router.get(
    "/getElectives",
    getElectives
);

module.exports = router;