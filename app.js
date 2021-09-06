/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded({extended: true});

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {res.send("welcome to academic rest api.");});

// User Routes Loading
const userRoutes = require("./routes/user.routes");
userRoutes.use(app);

// token middleware
tkFn = require("./middleware/verifyToken")
app.use(tkFn)

// Students Routes Loading
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes.use(app);

// Teacher Routes Loading
const studentRoutes = require("./routes/student.routes");
studentRoutes.use(app);

// Period Routes Loading
const periodRoutes = require("./routes/period.routes");
periodRoutes.use(app);

// Course Routes Loading
const courseRoutes = require("./routes/course.routes");
courseRoutes.use(app);

app.listen(port, () => {console.log("server is running...")});