const router = require('express').Router();
const {userSignup,otpVerify} = require('../controllers/userController/userSignupController')
const {userLogin} = require('../controllers/userController/userLoginController')
const {questionAdd,getQuestion,particularQuestion,updateVote,incrementVote,reportQuestion} = require('../controllers/userController/questionController')
const {answerAdd} = require("../controllers/userController/answerController")
const {commentAdd} = require("../controllers/userController/commentController")
const {updateProfileController,getProfileData,getImage, updateUserDetails}  = require('../controllers/userController/userProfileController');
// const authMiddleware = require('../middleware/authMiddleware')
const {getUsersDetails} = require("../controllers/adminController/adminUsersDetailsController")

router.post('/userSignup',userSignup)
router.post('/userLogin',userLogin)

router.get("/api",(req,res)=>{  
       res.send("welcome to bugfixer ")
});

router.post('/question',questionAdd)
router.post("/answer",answerAdd)
router.post("/comment/:id",commentAdd)

router.get('/getQuestion',getQuestion);
router.get('/question/:id',particularQuestion)

// router.post('/mobile',otpGenerate);
// router.post('/otp',otpInput)


router.post('/profile/:id',updateProfileController)
router.get('/profileData',getProfileData)
router.get('/getImage/:id',getImage)
router.put("/update-user",updateUserDetails)

router.get("/user-details",getUsersDetails)
router.post("/otp-check/:otp",otpVerify)


router.put("/vote-updating",updateVote)
router.put("/vote-increment",incrementVote)


router.post('/question-report/:qid',reportQuestion)

module.exports = router;