const express = require("express");
const router  = express.Router();
const { verifyPassword } = require('../controller/password');

router.post('/',verifyPassword);

module.exports = router;