const request = require('request');
const cheerio = require('cheerio');
const rp = require('request-promise');

const posts = require('../models/posts');

exports.scrape = function (req,res){
    rp('https://www.theonion.com/', function(error,response,html){
        const $ = cheerio.load(html);
        $('article').each(function(i,element){
            let title = $(element).find('a[class=js_entry-link]').text();
            let link = $(element).find('a[class=js_entry-link]').attr('href');
            let summary = $(element).find('.entry-summary').children('p').text();
            
            posts.findOne({Headline: title}, function(err, match){
                if(!match){
                    if(summary){
                        posts.create({
                            Headline: title,
                            Summary: summary,
                            URL: link
                        },
                        function(err, created){
                            if(err){
                                console.log(err);
                            } else {
                                console.log(`the following were created ${created}`);
                            }
                        })
                    } 
                }
            })
        })
        res.redirect('/');
    })
}