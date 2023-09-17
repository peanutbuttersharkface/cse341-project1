const mongodb = require('../data/database');

const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getContacts().db().collection('Contacts').find();
    result.toArray().then((Contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(Contacts);
    });
};

const getSingle = async (req, res) =>{
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('Contacts').find({_id:contactId});
    result.toArray().then((Contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(Contacts[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};

