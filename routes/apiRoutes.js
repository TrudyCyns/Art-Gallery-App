const express = require('express');

// Import Controller
const apiController = require('../controllers/apiController');

const router = express.Router();

// Routes
router.route('/users/new').post(apiController.createUser);
router.route('/users').get(apiController.getAllUsers);
router.route('/photos/upload').post(apiController.uploadFile);
router.route('/bucket/list').get(apiController.getFiles);
router.route('/photos').get(apiController.getAllPhotos);
router.route('/photos/new').post(apiController.createPhoto);
router.route('/login').post(apiController.loginUser);
router.route('/user/photos').get(apiController.getUserPhotos);
router.route('/user/passwordreset').get(apiController.resetPassword);

module.exports = router;
