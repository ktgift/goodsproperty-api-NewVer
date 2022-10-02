const express = require('express');

const userController = require("../controllers/userController");

const router = express.Router();

router.get('/', userController.getAllUser);
router.patch(
    "/",
    // upload.fields([
    //   { name: "profilePic", maxCount: 1 },
    //   { name: "coverPhoto", maxCount: 1 },
    // ]),
    userController.updateProfilePic
  );
router.get('/userlogin', userController.getUserlogin);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);
// สำหรับ get post where userId
router.get('/:userId', userController.getPropertyPost); 

 
module.exports = router;