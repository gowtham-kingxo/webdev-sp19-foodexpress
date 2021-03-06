const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const user = require('./routes/profile.route.server');
const restaurant = require('./routes/restaurant.route.server');
const featured = require('./routes/featured.route.server');
const event = require('./routes/event.route.server');
const review = require('./routes/review.route.server');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));



const db = require('./data/db').mongoURI;

mongoose.connect(db)
    .then(conn => console.log('mongodb connected'))
    .catch(err => console.log(err));


app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// app.get('/', (req, res) => res.send('Hello world whatsup'));
app.use('/api/profile', user);


app.use('/api/user', user);

app.use('/api/restaurant', restaurant);
app.use('/api/event', event);
app.use('/api/review', review);
app.use('/api/featured', featured);

app.use(function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
