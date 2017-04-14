/**
 * Created by ashu_dev on 14/04/17.
 */


var express = require('express');


module.exports = function(app){
    console.log('route instance created');


     app.use('/api/mukesh' , require('./api'))
      app.use('/api/user' ,require('./user'));



    app.route('/*' , function(req,res){
        res.send('wrong url');
    })
}