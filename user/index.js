/**
 * Created by ashu_dev on 14/04/17.
 */

var express = require('express');
var userController = require('./user.controller')

var Router = express.Router();

Router.get('/create' , userController.createUser);
Router.get('/getUsers' , userController.getAllUsers);


module.exports = Router ;