const request = require('request');
const cheerio = require('cheerio');

const posts = require('../models/posts');

exports.scrape = function (req,res){
    request('https://www.theonion.com/', function(error,response,html){
        const $ = cheerio.load(html);
        $('article').each(function(i,element){
            let title = $(element).find('a').text();
            let link = $(element).find('a').attr('href');
            let summary = $(element).find('.entry-summary').children('p').text();
            
            if(summary){
                posts.insert({
                    Headline: title,
                    Summary: summary,
                    URL: link
                },
            function(err, inserted){
                if(err){
                    console.log(err);
                } else {
                    console.log(inserted);
                }
            })
            }
        })
    })
    res.redirect('/');
}