const posts = require('../models/posts');

exports.index = function(req, res){
    posts
    .find()
    .then(function(allPosts){
        console.log(`these are all the posts retrieved ${allPosts}`);
        res.render('index', {posts: allPosts})
    });
}

exports.saveThis = function(req, res){
    console.log(req.body);
    posts.update({_id:req.body.id},{Saved:true}, function(err,raw){
        if(err){
            console.log(err);
        } else {
            res.json({success: "article saved"})
        }
    })
}