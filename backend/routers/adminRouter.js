const express = require('express')
const router = express.Router();
const { adminLogin } = require('../controllers/adminController/adminLoginController')
const {blockUser,unblockUser,getUsersDetails} = require("../controllers/adminController/adminUsersDetailsController")
const {getReportedQuestion,deleteQuestion,getAllQuestions} = require("../controllers/adminController/adminQuestionController")
const { verifyJWT } = require("../middleware/adminMiddleware")
const {editCommunity} = require("../controllers/adminController/adminCommunityController")
const { addTag , getTags,deleteTag} = require("../controllers/adminController/adminTagsController")

router.post('/admin-login',adminLogin)
router.put("/block-user/:id",blockUser)
router.put("/unblock-user/:id",unblockUser)
router.get("/user-details",getUsersDetails)
router.get('/get-report-questions',getReportedQuestion)
router.delete("/question-delete/:qid",deleteQuestion)
router.get('/get-questions',getAllQuestions)
router.post("/add-tag",verifyJWT,addTag)
router.get("/get-tags",verifyJWT,getTags)
router.delete("/tag-delete",verifyJWT , deleteTag)
router.put("/edit-community",verifyJWT , editCommunity)



module.exports = router;