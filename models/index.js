var mongoose = require('mongoose');

mongoose.connect('mongodb://cahya:isra@ds235850.mlab.com:35850/webdev');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");