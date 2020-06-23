const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	console.log('Server is up and running');
	res.send({ msg: 'hello' });
});

module.exports = router;
