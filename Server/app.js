const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const registerRouter = require('./routes/register');
const favouritesRouter = require('./routes/favourites');
const deleteRouter = require('./routes/delete');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/admin', adminRouter(db));
app.use("/api/login", loginRouter(db));
app.use("/api/logout", logoutRouter(db));
app.use("/api/register", registerRouter(db));
app.use("/api/favourites", favouritesRouter(db));
app.use("/api/delete", deleteRouter(db));


module.exports = app;
