const posts = require('../models/posts');

exports.index = function(req, res){
    posts.find({Saved:true}).then(function(savedArticles){
        res.render('savedArticles',{
            articles:savedArticles
        });
    });
}

exports.remove = function(req,res){
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
        res.json(notes);
    })
}

exports.addNote = function(req, res){
    posts.update({_id:req.body.id},{$push:{Notes:req.body.comment}})
    .then(function(){
        res.redirect("/savedArticles")
    })
}

