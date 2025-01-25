const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const userRouter = require('./routes/user.routes');
const path = require('path');
const orderRouter = require('./routes/order.routes');


dotenv.config();
const app = express();

app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/orders', orderRouter);

app.use('/auth', userRouter);

app.get('/', (req, res) => {
    res.render('register');
});

app.get('/admin/orders', (req, res) => {
    Order.findByUserId(null, (err, orders) => {
        if (err) {
            return res.status(500).send('Ошибка получения данных');
        }
        res.render('admin', { orders });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
