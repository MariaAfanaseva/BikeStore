const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();
const dbPath = 'db/userCart.json';

router.get('/', (req, res) => {
	fs.readFile('db/userCart.json', 'utf-8', (err, data) => {
		if (err) {
			res.sendStatus(404, JSON.stringify({result: 0, text: err}));
		} else {
			res.send(data);
		}
	});
});

router.post('/', (req, res) => {
	handler(req, res, 'add', dbPath);
})

router.put('/:id', (req, res) => {
	handler(req, res, 'change', dbPath);
})

router.delete('/:id', (req, res) => {
	handler(req, res, 'delete', dbPath);
})


// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE

module.exports = router;