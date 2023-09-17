const express = require('express');
console.log(express);
const router = express.Router();
console.log(router);
const contactsController =  require('../controller/contacts');
console.log(contactsController);
router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;