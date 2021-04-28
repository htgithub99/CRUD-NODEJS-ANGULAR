const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const route = require('./routes/route')
const path = require('path')
const app = express()
const port = 3000

/* HTTP Logger */
app.use(morgan('combined'))

/* Template engine */
app.engine('handlebars', handlebars());

/* Set .hbs đuôi file views */
app.engine('.hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

/* Đường dẫn folder views */
app.set('views', path.join(__dirname, '/resources/views'));

/* Đường dẫn folder public chứa ảnh */
app.use(express.static(path.join(__dirname, 'public')));

route(app)

app.listen(port, () => {
    console.log(`App To Do List to Run http://127.0.0.1:${port}`)
})