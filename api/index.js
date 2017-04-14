/**
 * Created by ashu_dev on 14/04/17.
 */


var express = require('express');
var mukeshController = require('./mukesh.controller');
var Router = express.Router();

Router.get('/' , mukeshController.index);

module.exports = Router ;