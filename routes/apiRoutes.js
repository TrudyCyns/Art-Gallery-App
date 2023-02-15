const express = require('express');

// Import Controller
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/login', (req, res) => res.send('Login Page'));

// Routes
router.route('/users/new').post(apiController.createUser);
router.route('/users').get(apiController.getAllUsers);
router.route('/photos/upload').post(apiController.uploadFile);
router.route('/bucket/list').get(apiController.getFiles);
router.route('/photos').get(apiController.getAllPhotos);
router.route('/photos/new').post(apiController.createPhoto);

module.exports = router;
