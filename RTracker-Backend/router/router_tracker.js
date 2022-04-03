var express = require("express");
var router = express.Router();
var trackerController = require("../controller/trackerController");

router.post("/tracker/add", trackerController.AddTracker);

module.exports = router;
