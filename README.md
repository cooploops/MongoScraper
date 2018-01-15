# MongoWebScraper

## Hosted on Heroku
 - https://fathomless-inlet-17347.herokuapp.com/
## Git Repo
 - https://github.com/cooploops/MongoScraper

## Description on how to use the app

The app is a web scraper of the popular satire fake-news site TheOnion (https://www.theonion.com/). There are buttons to get new articles, read them, save them, and to also comment on them.

## Requirements

- Create an app modeling an MVC framework using the newest/latest topics we covered being Sequelize and Handlebars. 

- be able to understand how an ORM like sequelize helps interact with a database in a MVC framework and how templates like handlebars can help organize the data being returned to the client/browser.

## Technologies Used
- Node/NPM
- Javascript
- jQuery/AJAX
- Mongo/Mongoose
- Handlebars
- Express
- request, and request-promise node package
- Cheerio.js

## Code Explanation
### Overall Lesson Learned
- This project helped put into perspective how work can be split up more efficiently when using the MVC framework. It also highlighted what type of information is required to be passed by those working on front-end or back-end so that things can proceed without waiting on others like route paths, or types of data, or how to send it back, etc...

### Specific Lessons Learned
- There are repercussions to using const and importing/exporting files everywhere else that may use the same variable name
- Heroku deploys with a default of process.env.node_env = production
- Heroku logs is super useful when debuggin why the app won't work once deployed
- How Passport works