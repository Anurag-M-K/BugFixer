const router = require('express').Router();
const {userSignup} = require('../controllers/userController/userSignupController')
const {userLogin} = require('../controllers/userController/userLoginController')

router.post('/userSignup',userSignup)
router.post('/userLogin',userLogin)


module.exports = router;