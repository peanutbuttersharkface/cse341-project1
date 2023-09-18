const express = require('express');

const router = express.Router();

const contactsController =  require('../controller/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

//patch or post can be used to update
router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);


module.exports = router;