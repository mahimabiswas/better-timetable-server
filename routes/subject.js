const express = require("express");
const router = express.Router();

// const { isSignedIn, isAdmin } = require("../controllers/auth");
const { add, get, _delete, update } = require("../controllers/subject");

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

module.exports = router;