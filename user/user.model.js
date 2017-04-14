/**
 * Created by ashu_dev on 14/04/17.
 */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    'name':String,
    'age':Number,
    'birthDate': Date


});


var User = mongoose.model('user' , userSchema );


module.exports = User ;