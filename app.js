const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./routes/apiRoutes');


const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(cors);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const config = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}


app.use(config);

//Main route for the api backend of the server
app.use('/api', apiRouter);

app.get('/', (req, res) => res.redirect('/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});
 
//Error handler
app.use(function(err, req, res, next) {
  //Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Render the error page
  res.status(err.status || 500);
  res.render('error')
});

module.exports = app;
