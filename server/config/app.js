// Filename: app.js
// Afzal Shaikh
// Creation date: 2021/09/27
// last revision: 2021/09/27





let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan'); // logger middleware

// database setup
let mongoose = require('mongoose');
let DB = require('./db');
// point mongoose to DB URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log('Connected to MongoDB...');
})

let indexRouter = require('../routes/index');
let constactsRouter = require('../routes/contactList');
// let usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);
app.use('/contact-list', constactsRouter);
// commented out users for Assignment1
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
