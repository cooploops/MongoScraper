const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    Headline: String,
    Summary: String,
    URL: String,
    Saved: {type:Boolean,
            default: false
    },
    Notes: [String]
});

module.exports = mongoose.model('posts', postSchema);