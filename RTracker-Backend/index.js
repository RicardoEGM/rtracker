var express = require("express");
var cors = require("cors");

var cookieParser = require("cookie-parser");
var logger = require("morgan");

var routerFields = require("./router/router_fields");
var routerTracker = require("./router/router_tracker");

var app = express();
var port = process.env.PORT || 3525;

//TODO: ANOTHER FILE
var allowedOrigins = ["http://localhost:3000", "http://localhost:3525"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this origin doesnt " +
          "allow access from the particular origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", routerFields);
app.use("/api", routerTracker);

app.listen(port, function () {
  console.log(`Server running in http://localhost:${port}`);
  console.log("Defined routes:");
  console.log("	[GET] http://localhost:3525/");
});
