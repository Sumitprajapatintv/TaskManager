const express = require("express");
const router = express();
const { getAllTask } = require("../controller/taskcontroller");
router.route("/").get(getAllTask);
module.exports = router;
