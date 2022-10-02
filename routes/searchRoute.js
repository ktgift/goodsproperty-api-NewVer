const express = require('express');

const searchController = require('../controllers/searchController');

const router = express.Router();

router.get('/province', searchController.getProvince);
router.get('/amphure', searchController.getAmphure);
router.get('/tambon', searchController.getTombon);

module.exports = router; 
