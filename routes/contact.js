const express = require("express");
const router = express.Router();
const { setData, handleDelete } = require("../controller/contact");

router.post("/", setData);
router.delete("/:id", handleDelete);

module.exports = router;
