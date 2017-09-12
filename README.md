# Nunjucks vs Vuejs(SSR)

## So sánh Nunjucks vs VueJS

Em tự đánh giá

|--|Nunjucks|VueJS|
|:--|:----:|:---------:|
|SEO|5|5|
|Dễ lập trình|5|4|
|Dễ bảo trì|||
|Độ ổn định|||
|Phân tách components|3|5|
|Filter hỗ trợ|5|3|
|Khả năng reload|||
|Cộng đồng hỗ trợ|3|5|
|Trải nghiệm người dùng|-|-|
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


