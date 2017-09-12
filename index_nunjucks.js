const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
let data1 = require('./data.json');

nunjucks.configure('views', {
	autoescape: true,
	cache: false,
	express: app,
	watch: true
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.get('*', (req, res) => {
    res.render('index', {
        url: req.url,
        data1: data1
    })
});

const server = app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});
