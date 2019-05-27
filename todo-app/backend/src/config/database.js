const mongoose = require('mongoose')

// usado para tirar uma advertência 
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')