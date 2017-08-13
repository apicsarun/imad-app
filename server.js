var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     articleOne: {
        title: 'Article one | Arun Malhotra',
        heading: 'Article one',
        date: 'Aug 13, 2017',
        content: `     
                    <p>
                       1. This is content for first Article.This is content for first Article.This is content for first Article
                        .This is content for first Article.This is content for first Article
                    </p>
                    <p>
                        This is content for first Article.This is content for first Article.This is content for first Article
                        .This is content for first Article.This is content for first Article
                    </p>
                    <p>
                        This is content for first Article.This is content for first Article.This is content for first Article
                        .This is content for first Article.This is content for first Article
                    </p>
                `
                    },
    articleTwo: {
        title: 'Article two | Arun Malhotra',
        heading: 'Article two',
        date: 'Aug 14, 2017',
        content: `   <p>
                        2. This is content for second Article.This is content for second Article.This is content for second Article.
                     </p>
                    `
                },
    articleThree: {
        title: 'Article three | Arun Malhotra',
        heading: 'Article three',
        date: 'Aug 15, 2017',
        content: `   <p>
                        3. This is content for third Article.This is content for third Article.This is content for third Article.
                     </p>
                    `
                    }
};

function createTemplate(data) {

var title = data.title;
var heading = data.heading;
var content = data.content;
var date  = data.date;

var htmlTemplate = 
    `<html>
    <head>
        <title>
             ${title} 
        </title>    
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
       <div Class ="container">
            <div>
                <a href= "/">Home </a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
               ${date}
            </div>
            <div>
              ${content}
             </div>
        </div>
    </body>
    </html>
    `;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:article', function (req, res) {
  //  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
  var articleName = req.param.article;
  console.log(articleName);
  res.send(createTemplate(articles[articleName]));
});

//app.get('/article-two', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
//  var articleName = 'articleTwo';
//  res.send(createTemplate(articles[articleName]));
//});

///app.get('/article-three', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
 /* var articleName = 'articleThree';
 res.send(createTemplate(articles[articleName]));
});
*/


 app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
