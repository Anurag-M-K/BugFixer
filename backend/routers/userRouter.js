const router = require("express").Router();
const {
  userSignup,
  otpVerify,
} = require("../controllers/userController/userSignupController");
const {
  userLogin,
} = require("../controllers/userController/userLoginController");
const {
  questionAdd,
  getQuestion,
  particularQuestion,
  decreaseVote,
  incrementVote,
  reportQuestion,
  getVotes,
  deleteUserQuestion,
} = require("../controllers/userController/questionController");
const {
  answerAdd,
  getAnswerByQId,
  increaseAnswerVote,
  getParticularAnswer,
} = require("../controllers/userController/answerController");
const {
  commentAdd,
  getComment,
} = require("../controllers/userController/commentController");
const {
  updateProfileController,
  getUserProfile,
  getProfileData,
  getImage,
  updateUserDetails,
  getUserQuestions,
} = require("../controllers/userController/userProfileController");
const {
  getUsersDetails,
  getUser,
} = require("../controllers/adminController/adminUsersDetailsController");
const { verifyJWT } = require("../middleware/authMiddleware");
const {
  addingCommunity,
} = require("../controllers/userController/userCommunityController");
const {
  getAllTags,
} = require("../controllers/userController/homePageRightSideController");

router.post("/userSignup", userSignup);
router.post("/userLogin", userLogin);
router.post("/otpVerifying", otpVerify);
router.post("/question", verifyJWT, questionAdd);
router.post("/answer", answerAdd);
router.post("/comment/:id", commentAdd);
router.get("/comment/:id", getComment);
router.get("/getQuestion", getQuestion);
router.get("/question/:id", particularQuestion);
router.get("/get-answer/:id", getAnswerByQId);
router.get("/getUserProfile", verifyJWT, getUserProfile);
router.post("/profile/:id", updateProfileController);
router.get("/profileData", getProfileData);
// router.get('/getImage',verifyJWT,getImage)
router.put("/update-user", updateUserDetails);
// router.get('/getUserDetails/:data_id',getUserDataForProfileUpdate)
router.delete("/question-delete/:qid", verifyJWT, deleteUserQuestion);
router.get("/get-user-questions", verifyJWT, getUserQuestions);

router.post("/otp-check/:otp", otpVerify);

router.post("/vote-decrease",verifyJWT, decreaseVote);
router.post("/vote-increment",verifyJWT, incrementVote);
router.get("/get-vote/:qid", getVotes);
router.post("/question-report/:qid", reportQuestion);

router.put("/answer-voting/:aid", increaseAnswerVote);
router.get("/answer/:qid", getParticularAnswer);

router.get("/getUser/:friendId", verifyJWT, getUser);

router.put("/join-community", verifyJWT, addingCommunity);
router.get("/get-all-tags", verifyJWT, getAllTags);

module.exports = router;
