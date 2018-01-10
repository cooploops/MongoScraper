const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    Headline: String,
    Summary: String,
    URL: String,
    PictureURL: String,
    Saved: Boolean
});

module.exports = mongoose.model('Posts', postSchema);