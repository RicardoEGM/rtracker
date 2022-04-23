var express = require("express");
var router = express.Router();
var fieldsController = require("../controller/fieldsController");

// var firebaseSettings = require('../config/firebaseConfig');

// var firebaseAuthenticationValidator = require('../app/FirebaseAuthenticationComponent/firebaseAuthentication.validator');

// get user profile - (body: [uid]) - (uid is required)
router.get("/form/getForm/", fieldsController.GetFields);
router.get("/form/getForm/:id", fieldsController.GetFormByDoc);

module.exports = router;
