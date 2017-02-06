var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article1': {
    title : 'Article one | Pradeep kumar jain',
    date : 'Feb 06 2017',
    heading : 'Article one',
    content : ` <p>
                This is my first article. I have very little interest to write , i love to read rather
            </p>
         `
},
    'article2': {
    title : 'Article two | Pradeep kumar jain',
    date : 'Feb 08 2017',
    heading : 'Article two',
    content : ` <p>
                This is my first article. I have very little interest to write , i love to read rather
            </p>
         `
     },
    'article3':{
         title : 'Article three | Pradeep kumar jain',
    date : 'Feb 08 2017',
    heading : 'Article three',
    content : ` <p>
                This is my first article. I have very little interest to write , i love to read rather
            </p>
         `},
};

 function createtemplate (data) {
     var heading = data.heading;
     var date = data.date;
     var title =data.title;
     var content=data.content;
var htmltemplate = `
<html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
  <div class='container'>
     <div>
        <a href='/'>Home</a>
     </div>
     <hr/>
     <h1> ${heading}</h1>
    
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
return htmltemplate ;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res){
    var articlename = req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
