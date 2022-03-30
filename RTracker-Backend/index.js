var express = require("express");

var cookieParser = require("cookie-parser");
var logger = require("morgan");

var routerForm = require("./router/tracker-from");



var app = express();
var port = process.env.PORT || 3525;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", routerForm);

app.listen(port, function () {
  console.log(`Server running in http://localhost:${port}`);
  console.log("Defined routes:");
  console.log("	[GET] http://localhost:3525/");
});
