const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const dbHelpers = require("./db/helpers/dbHelpers")(db);
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
// const adminRouter = require("./routes/admin");
const loginRouter = require("./routes/login");
// const logoutRouter = require("./routes/logout");
const favouritesRouter = require("./routes/favourites");
// const deleteRouter = require("./routes/delete");
const emailRouter = require("./routes/email");

app.use("/", indexRouter);
app.use("/api/users", usersRouter(dbHelpers));
// app.use("/api/admin", adminRouter(dbHelpers));
app.use("/api/login", loginRouter(dbHelpers));
// app.use("/api/logout", logoutRouter(dbHelpers));
app.use("/api/favourites", favouritesRouter(dbHelpers));
// app.use("/api/delete/:id", deleteRouter(dbHelpers));
app.use("/api/email", emailRouter());

module.exports = app;
