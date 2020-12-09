var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added

const { all } = require('async');
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

const dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'book_review',
	user: 'postgres',
	password: 'overwatch'
};

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

app.get('/', function(req, res) {
	res.render('pages/main',{
		title:'Home Page'
	});
});

app.get('/homePage', function(req, res) {
	res.render('pages/main',{
		title:'Home Page'
	});
});

app.get('/reviews', function(req, res) {
	res.render('pages/reviews',{
		title:'Reviews Page'
	});
});

app.listen(3000);
console.log('3000 is the magic port');


