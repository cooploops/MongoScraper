const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    Headline: String,
    Summary: String,
    URL: String,
    PictureURL: String
});

module.exports = mongoose.model('Posts', postSchema);