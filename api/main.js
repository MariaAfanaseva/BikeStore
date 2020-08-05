const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
var cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json())  // backend works with json
app.use('/', express.static('../frontend'));
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
    fs.readFile('db/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listen ${port}`)
});