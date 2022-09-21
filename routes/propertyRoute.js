const express = require('express');

const propertyController = require('../controllers/propertyController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', propertyController.getAllProperty);
router.post('/', authenticate, propertyController.createProperty);
router.post('/:propertyId', propertyController.createInterseted);
router.get('/:propertyId', propertyController.getPropertyById);
router.put('/:propertyId', authenticate, propertyController.updateProperty);
router.delete('/propertyId', authenticate, propertyController.deleteProperty);

module.exports = router; 
