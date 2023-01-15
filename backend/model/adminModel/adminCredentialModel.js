const mongoose = require('mongoose');

const adminCredential = mongoose.Schema({
    username:String,
    password:String
});

const AdminCredential = mongoose .model('admin',adminCredential)
module.exports = AdminCredential;