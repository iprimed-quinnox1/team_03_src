var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    tag1: {
        type: String,
        default: ''
    },
    tag2: {
        type: String,
        default: ''
    }
    
});