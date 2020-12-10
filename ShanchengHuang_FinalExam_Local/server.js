var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();


let  dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'book_review',
    user: 'postgres',
    password: 'overwatch'
};

const isProduction = process.env.NODE_ENV === 'production';
dbConfig = isProduction ? process.env.DATABASE_URL : dbConfig;
let db = pgp(dbConfig);


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/')); //This line is necessary for us to use relative paths and access our resources directory

app.get('/', function (req, res) {
    res.render('pages/main', {
        title: 'Home Page'
    });
});

app.get('/main', function (req, res) {
    res.render('pages/main', {
        title: 'Home Page'
    });
});

app.post('/main/post', function (req, res) {
 

    var book = req.body.booksname;
    var review = req.body.reviewstext;
    var newid = "SELECT COUNT(*) FROM table_review;"
    var date = new Date();
    var d = date.getDate();
     	
    var addone = "INSERT INTO table_review (id,book_title,review,review_data) VALUES (((SELECT id FROM table_review ORDER BY id DESC LIMIT 1) + 1),'"+ book +"','"+ review +"','2020-12-"+d+"');"
console.log(addone);
db.task('get-everything', task => {
        return task.batch([
              //task.any(newid),
                task.any(addone),
                res.redirect('/main')
        ]);
    })

});




app.get('/reviews', function (req, res) {
    var id = "SELECT id AS id FROM table_review;";
    var book = "SELECT book_title AS book FROM table_review;";
    var review = "SELECT review AS review FROM table_review;";
    var date = "SELECT table_review.review_data AS date FROM table_review;";
    var num = "SELECT COUNT(*) AS num FROM table_review;";

    db.task('get-everything', task => {
            return task.batch([
                task.any(id),
                task.any(book),
                task.any(review),
                task.any(date),
                task.any(num)
            ]);
        })
        .then(data => {
            res.render('pages/reviews', {
                my_title: "Reviews Page",
                id: data[0],
                book: data[1],
                review: data[2],
                date: data[3],
                num: num
            })
        })
        .catch(err => {
            console.log('error', err);
        });
});



app.listen(3000);

