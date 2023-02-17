const router = require('express').Router();
const {userSignup,otpVerify} = require('../controllers/userController/userSignupController')
const {userLogin} = require('../controllers/userController/userLoginController')
const {questionAdd,getQuestion,particularQuestion,decreseVote,incrementVote,reportQuestion,getVotes,deleteUserQuestion} = require('../controllers/userController/questionController')
const {answerAdd,getAnswerByQId,increaseAnswerVote,getParticularAnswer} = require("../controllers/userController/answerController")
const {commentAdd,getComment} = require("../controllers/userController/commentController")
const {updateProfileController,getUserProfile,getProfileData,getImage, updateUserDetails,getUserQuestions}  = require('../controllers/userController/userProfileController');
// const authMiddleware = require('../middleware/authMiddleware')
const {getUsersDetails} = require("../controllers/adminController/adminUsersDetailsController");
const { verifyJWT } = require('../middleware/authMiddleware');

router.post('/userSignup', userSignup)
router.post('/userLogin',userLogin)
router.post("/otpVerifying",otpVerify)

router.get("/api",(req,res)=>{  
       res.send("welcome to bugfixer ")
});

router.post('/question',questionAdd)
router.post("/answer",answerAdd)
router.post("/comment/:id",commentAdd)
router.get("/comment/:id",getComment)

router.get('/getQuestion',getQuestion);
router.get('/question/:id',particularQuestion)
router.get('/get-answer/:id',getAnswerByQId)


router.get("/getUserProfile/:id",verifyJWT,getUserProfile)
router.post('/profile/:id',updateProfileController)
router.get('/profileData',getProfileData)
router.get('/getImage/:email',verifyJWT,getImage)
router.put("/update-user",updateUserDetails)
// router.get('/getUserDetails/:data_id',getUserDataForProfileUpdate)
router.delete("/question-delete/:id",verifyJWT, deleteUserQuestion)
router.get('/get-user-questions/:userId',verifyJWT,getUserQuestions)



router.post("/otp-check/:otp",otpVerify)


router.put("/vote-decrease/:qid",decreseVote)
router.put("/vote-increment/:qid",incrementVote)
router.get("/get-vote/:qid",getVotes)
router.post('/question-report/:qid',reportQuestion)

router.put('/answer-voting/:aid',increaseAnswerVote)
router.get("/answer/:aid",getParticularAnswer)

module.exports = router;