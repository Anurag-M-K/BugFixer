const router = require('express').Router();
const {userSignup,otpVerify} = require('../controllers/userController/userSignupController')
const {userLogin} = require('../controllers/userController/userLoginController')
const {questionAdd,getQuestion,particularQuestion,decreseVote,incrementVote,reportQuestion,getVotes} = require('../controllers/userController/questionController')
const {answerAdd} = require("../controllers/userController/answerController")
const {commentAdd} = require("../controllers/userController/commentController")
const {updateProfileController,getProfileData,getImage, updateUserDetails,getUserDataForProfileUpdate}  = require('../controllers/userController/userProfileController');
// const authMiddleware = require('../middleware/authMiddleware')
const {getUsersDetails} = require("../controllers/adminController/adminUsersDetailsController")

router.post('/userSignup', userSignup)
router.post('/userLogin',userLogin)

router.get("/api",(req,res)=>{  
       res.send("welcome to bugfixer ")
});

router.post('/question',questionAdd)
router.post("/answer",answerAdd)
router.post("/comment/:id",commentAdd)
// router.get("/get-answer/:qid",getAnswers)

router.get('/getQuestion',getQuestion);
router.get('/question/:id',particularQuestion)

// router.post('/mobile',otpGenerate);
// router.post('/otp',otpInput)


router.post('/profile/:id',updateProfileController)
router.get('/profileData',getProfileData)
router.get('/getImage/:email',getImage)
router.put("/update-user",updateUserDetails)
router.get('/getUserDetails/:data_id',getUserDataForProfileUpdate)





router.get("/user-details",getUsersDetails)
router.post("/otp-check/:otp",otpVerify)


router.put("/vote-decrease",decreseVote)
router.put("/vote-increment/:qid",incrementVote)
router.get("/get-votes/:qid",getVotes)

router.post('/question-report/:qid',reportQuestion)

module.exports = router;