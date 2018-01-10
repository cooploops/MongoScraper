module.exports = function(app){
    const application = require('./routes/application');
    const scrape = require('./routes/scrape');

    app.use('/', application);
    app.use('/scrapePosts', scrape)
}