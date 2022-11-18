const mongoose = require('mongoose');

const { Schema } = mongoose;

const costScheme = new Schema({
  text: String,
  date: {
    type: String,
    default: new Date().toLocaleDateString('ru'),
  },
  number: Number,
});

module.exports = Task = mongoose.model('Costs', costScheme);