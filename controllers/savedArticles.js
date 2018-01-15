const posts = require('../models/posts');

exports.index = function(req, res){
    posts.find({Saved:true}).then(function(savedArt){
        console.log(`these are the saved articles ${savedArt}`)
        res.render('savedArticles',{
            articles:savedArt
        });
    });
}

exports.removeComment = function(req,res){
    posts.update({_id:req.body.id}, {$pull: {Notes:{body:req.body.delComment}}},function(err,raw){
        if(err){
            console.log(err);
        } else {
            res.redirect("/savedArticles");
        }
    })
}

exports.removeSaved = function(req, res){
    posts.update({_id:req.body.id},{Saved:false}, function(err,raw){
        if(err){
            console.log(err);
        } else {
            res.json({success:"article removed from saved"});
        }
    })
}

exports.getNotes = function(req, res){
    posts.findById(req.body.id, 'Notes').then(function(notes){
        console.log(`these are the notes ${notes}`);
        res.json({allComments:notes});
    })
}

exports.addNote = function(req, res){
    posts.update({_id:req.body.id},{$push:{Notes:{body:req.body.comment}}})
    .then(function(){
        res.redirect("/savedArticles")
    })
}

