const express = require('express')
const router = express.Router();
const { adminLogin } = require('../controllers/adminController/adminLoginController')
const {blockUser,unblockUser} = require("../controllers/adminController/adminUsersDetailsController")

router.post('/admin-login',adminLogin)
router.put("/block-user/:id",blockUser)
router.put("/unblock-user/:id",unblockUser)

module.exports = router;