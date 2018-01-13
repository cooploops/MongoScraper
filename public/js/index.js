$(document).ready(function(){

    $(".saveArticleBtn").click(function(){
        articleId = $(this).attr("article-id");
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




})