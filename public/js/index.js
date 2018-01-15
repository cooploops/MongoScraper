$(document).ready(function(){
// update article to be shown on saved
    $(".saveArticleBtn").click(function(){
        let articleId = $(this).attr("article-id");
        console.log(articleId);
        $.ajax({
            method: "PUT",
            url: '/saveThis',
            data: {id:articleId}
        })
        .done(function(response){
            window.location.href = "/";
            console.log(`response from server was ${JSON.stringify(response)}`);
        })
    });
// remove article from Saved
    $(".removeSavedBtn").click(function(){
        let articleId = $(this).attr("article-id");
        console.log(articleId);
        $.ajax({
            method: "PUT",
            url: '/savedArticles/removeSaved',
            data: {id:articleId}
        })
        .done(function(response){
            window.location.href = "/";
            console.log(`response from server was ${JSON.stringify(response)}`);
        })
    });

// open up comment modal for article
    $(".getCommentsBtn").click(function(){
        let articleId = $(this).attr("article-id");
        $(".postComment").attr("article-id", articleId);
        $(".removeComment").attr("article-id", articleId);
        // $.get('/savedArticles/getNotes', {id:articleId})
        // .then(function(data){
        //     console.log(data);
        // }).catch(function(err){
        //     console.log(err);
        // })
    });
// post new comment
    $(".postComment").click(function(event){
        event.preventDefault();
        const articleID = $(this).attr("article-id");
        const userComment = $(`#message-text[article-id='${articleID}']`).val();
        console.log(userComment);
        $.post('savedArticles/addNote',{
            id:articleID,
            comment:userComment
        })
        .then(function(){
            $("textarea").val("");
            location.reload();
        }).catch(function(err){
            console.log(err);
        })
    })

// remove comment
$(".removeComment").click(function(){
    const articleID = $(this).attr("article-id");
    const comment = $(this).prev().text();
    console.log(comment);
    $.post('savedArticles/removeComment',
        {
            id:articleID,
            delComment: comment
        })
    .done(function(){
    location.reload();
    })
})


})