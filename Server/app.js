const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const db = require("./db");
const dbHelpers = require("./db/helpers/dbHelpers")(db);

const app = express();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const app = express();


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const registerRouter = require('./routes/register');
const favouritesRouter = require('./routes/favourites');
const deleteRouter = require('./routes/delete');


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter(dbHelpers));
app.use('/api/admin', adminRouter(dbHelpers));
app.use("/api/login", loginRouter(dbHelpers));
app.use("/api/logout", logoutRouter(dbHelpers));
app.use("/api/register", registerRouter(dbHelpers));
app.use("/favourites", favouritesRouter(dbHelpers));
app.use("/api/delete", deleteRouter(dbHelpers));


module.exports = app;
