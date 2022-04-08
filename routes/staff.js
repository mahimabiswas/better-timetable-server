const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin } = require("../controllers/auth");
<<<<<<< HEAD
const { addStaff, getDetails, list } = require("../controllers/staff");
=======
const { addStaff, getDetails, update, _delete } = require("../controllers/staff");
>>>>>>> c4663fe42df01f4d126676e8fc0e84269b36a1bb


router.post(
    "/add",
    isSignedIn,
    isAdmin,
    addStaff
);

router.get(
    "/list",
    isSignedIn,
    isAdmin,
    list
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