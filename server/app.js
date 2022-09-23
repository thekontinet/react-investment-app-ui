require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var apiRouter = require('./routes/api/index');
const errorHandler = require('./middlewares/errorHandler');

var app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.use(function(err, req, res, next){
    res.status(err.statusCode || 500)
    next(err)
})

app.use(errorHandler)



module.exports = app;
