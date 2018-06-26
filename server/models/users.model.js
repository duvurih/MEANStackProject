const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: String
});

const Users = mongoose.model('users', usersSchema);

module.exports = Users;

