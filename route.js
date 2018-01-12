module.exports = function(app){
    const application = require('./routes/application');
    const scrape = require('./routes/scrape');
    const savedArticles = require('./routes/savedArticles');

    app.use('/', application);
    app.use('/scrapePosts', scrape);
    app.use('/savedArticles', savedArticles);
}