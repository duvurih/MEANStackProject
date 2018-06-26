const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const financialSchema = new Schema({
    name: String,
    color: String,
    data: Array()
});

const Financial = mongoose.model('financials', financialSchema);

module.exports = Financial;

