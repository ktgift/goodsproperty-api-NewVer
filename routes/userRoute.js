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
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);


module.exports = router;