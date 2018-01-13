const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const configDB = require('./config/database');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const app = express();
// set views folder
app.set('views', path.win32.join(__dirname, "views"));
// setup handlebars view engine
app.engine('handlebars', exphbs({
    defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.win32.join(__dirname, 'public')));


require('./route')(app);


// setup mongoose connection
mongoose.connect(configDB.url,{
    useMongoClient: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function(){
    console.log("Mongoose connection successful");
});

// port 
const PORT = process.env.PORT || 7200;

app.listen(PORT, () => {
    console.log(`App serving on port ${PORT}`)
});


