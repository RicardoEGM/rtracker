var express = require('express');
var router = express.Router();
var formController = require('../controller/formController');

// var firebaseSettings = require('../config/firebaseConfig');

// var firebaseAuthenticationValidator = require('../app/FirebaseAuthenticationComponent/firebaseAuthentication.validator');

// get user profile - (body: [uid]) - (uid is required)
router.get('/form/getForm/:id', formController.GetFormByDoc);



module.exports = router;
