const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const swaggerUI = require("swagger-ui-express");

const routerFields = require("./router/router_fields");
const routerTracker = require("./router/router_tracker");
const swaggerDoc = require("./swagger.json");

const app = express();
const port = process.env.PORT || 3525;

//TODO: ANOTHER FILE
const allowedOrigins = ["http://localhost:3000", "http://localhost:3525"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this origin  " +
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
// app.use(cookieParser());

app.use("/api", routerFields);
app.use("/api", routerTracker);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(port, function () {
  console.log(`Server running in http://localhost:${port}`);
  console.log("Defined routes:");
  console.log("	[GET] http://localhost:3525/");
});
