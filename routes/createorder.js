const express = require("express");
const { postorder } = require("../controller/createorder.js");

const router = express.Router();

router.post('/easyecom-createorder', postorder);

module.exports = router;