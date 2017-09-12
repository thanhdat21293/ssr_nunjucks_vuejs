# Nunjucks vs Vuejs(SSR)

## So sánh Nunjucks vs VueJS

Em tự đánh giá

|--|Nunjucks|VueJS|
|:--|:----:|:---------:|
|SEO|5|5|
|De lap trinh|5|4|
|De bao tri|||
|Do on dinh|||
|Phan tach components|3|5|
|Filter ho tro|5|3|
|Kha nang reload|||
|Cong dong ho tro|3|5|
|Trai nghiem nguoi dung|||
|Code nhanh|4|5|

## Nunjucks

#### Cài đặt

```
npm i --save nunjucks
```

#### Cấu hình

```javascript
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
	autoescape: true,
	cache: false,
	express: app,
	watch: true
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
```

Ví dụ: Render trang html và trả về dữ liệu

```javascript
app.get('*', (req, res) => {
    res.render('index', {
        url: req.url,
        data1: data1
    })
});
```

#### Filter

Hỗ trợ 38 filters có sẵn. [Filter](https://mozilla.github.io/nunjucks/templating.html#builtin-filters)

Hỗ trợ viết custom filter. [Add new filter](https://mozilla.github.io/nunjucks/api.html#addfilter)



## VueJS

#### Cài đặt

```
npm i --save vue
npm i --save vue-server-renderer
```

#### Sử dụng cơ bản

```javascript
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
```

#### Filter

Không có filter có sẵn

Hỗ trợ viết custom filter. [Add new filter](https://vuejs.org/v2/guide/filters.html#ad)


