const express = require('express');

const propertyController = require('../controllers/propertyController');

const router = express.Router();

router.get('/', propertyController.getAllProperty);
router.post('/', propertyController.createProperty);
router.post('/:propertyId', propertyController.createInterseted);
router.get('/:propertyId', propertyController.getPropertyById);
router.put('/:propertyId', propertyController.updateProperty);
router.delete('/propertyId', propertyController.deleteProperty);

module.exports = router; 
