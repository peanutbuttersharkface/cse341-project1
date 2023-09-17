const router = require('express').Router();
console.log(router);
//router.get('/', (req, res) => {res.send('Hello World');});
router.use('/contacts', require('./contacts'));

module.exports = router;