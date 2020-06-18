const express = require("express");
const router = express.Router();

const { signout } = require("../controllers/auth");
const { signup } = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name should be at least 3 char"),
    check("email").isEmail(),
    check("password")
      .isLength({ min: 3 })
      .withMessage("password should be atleast 3 char"),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
