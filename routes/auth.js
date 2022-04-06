const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { signOut, signUp, signIn, isSignedIn, verifyEmail } = require("../controllers/auth");

router.post(
    "/signup",
    [
        check("email", "email is required").isEmail(),
        check("password", "password should be at least 3 char").isLength({ min: 8 })
    ],
    signUp
);

router.post(
    "/signin",
    [
        check("email", "email is required").isEmail(),
        check("password", "password field is required").isLength({ min: 8 })
    ],
    signIn
);

router.get(
    "/verifyEmail/:token",
    verifyEmail
);

router.get("/signout", signOut);

module.exports = router;