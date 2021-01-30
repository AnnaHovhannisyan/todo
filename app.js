const createError = require('http-errors');
const express = require('express');
let path = require('path');
const cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser=require('body-parser');
let urlEncodedParser=bodyParser.urlencoded({extended:true});



let indexRouter = require('./routes/index');
let crmRoutesRouter=require('./routes/crmRoutes');
const mongoose = require('mongoose');
const {mongodb}=require('./config');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', [indexRouter,crmRoutesRouter]);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



let url=mongodb.link;
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', ()=>console.log('connected'));


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//app.listen(3000);
module.exports = app;
