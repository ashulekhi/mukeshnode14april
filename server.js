/**
 * Created by ashu_dev on 14/04/17.
 */

var express = require('express');

var app = express();
var route = require('./routes');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mukeshtest1' , function(err){
    if(err){
        console.log('err' , err)
    }
    console.log('connected')
});


route(app);



app.listen('2000' , function(){
    console.log('server started');

});


module.exports = app;

