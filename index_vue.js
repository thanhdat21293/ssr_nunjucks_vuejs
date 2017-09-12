const Vue = require('vue')
const express = require('express');
const app = express();
const fs = require('fs');
const renderer = require('vue-server-renderer').createRenderer()
let data1 = require('./data.json');

app.get('*', (req, res) => {

    const appVue = new Vue({
        data: {
            url: req.url,
            data1: data1
        },
        template: fs.readFileSync('./views/index.vue', 'utf-8')
    });

    renderer.renderToString(appVue, (err, html) => {
        if(err) console.log(err.message);
        res.end(html); // will be the full page with app content injected.
    })
});

app.listen(8080);
