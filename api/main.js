const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
var cors = require('cors');
const path = require('path'); 

const app = express();

app.use(cors());

app.use(express.json());  // backend works with json
app.use('/', express.static('../api'));
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
    fs.readFile(path.resolve('db', 'products.json'), 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

app.get('/api/product/:id', (req, res) => {
    fs.readFile(path.resolve('db', 'products_detail.json'), 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
        } else {
            const product = JSON.parse(data).find(
                (product) => product.id === +req.params.id);
            res.send(product);
        }
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listen ${port}`)
});