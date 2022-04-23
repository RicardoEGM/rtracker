var express = require("express");
var router = express.Router();
var trackerController = require("../controller/trackerController");

router.get("/tracker/get/:id", trackerController.GetTrackerByID);
router.get("/tracker/get", trackerController.GetTracker);
router.post("/tracker/add", trackerController.AddTracker);

module.exports = router;
