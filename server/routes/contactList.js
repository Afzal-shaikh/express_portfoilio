// Filename: contactList.js
// Afzal Shaikh
// Creation date: 2021/10/21

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let contactListController = require('../controllers/contactList');

// connect to contact list
let contacts = require('../models/contacts');

// GET Route for Contact List page - READ operation
router.get('/', contactListController.displayContactList);

// GET Route for displaying Add Contact page - CREATE
router.get('/add',  (req, res, next) =>{ 
    res.render('businessContacts/add', {title: 'Add Contact'})
});

// POST Route for processing Add Contact page - CREATE
router.post('/add', contactListController.addContact);

// GET Route for displaying Edit Contact page - UPDATE
router.get('/edit/:id', contactListController.displayEditPage);

// POST Route for processing Edit Contact page - UPDATE
router.post('/edit/:id', contactListController.processEditContact);

// GET to perform Contact Deleteion - DELETE
router.get('/delete/:id', contactListController.deleteContact);

module.exports = router;