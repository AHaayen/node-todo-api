var mongoose = require('mongoose');

var user1 = mongoose.model('user1', {
    email: {
        type: String, 
        required: true,
        minLength: 1,
        trim: true
    } 
});

module.exports = {user1};