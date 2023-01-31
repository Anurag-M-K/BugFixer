const express = require('express')
const router = express.Router();
const { adminLogin } = require('../controllers/adminController/adminLoginController')
const {blockUser,unblockUser} = require("../controllers/adminController/adminUsersDetailsController")
const {getReportedQuestion,deleteQuestion} = require("../controllers/adminController/adminQuestionController")



router.post('/admin-login',adminLogin)
router.put("/block-user/:id",blockUser)
router.put("/unblock-user/:id",unblockUser)


router.get('/get-report-questions',getReportedQuestion)
router.delete("/question-delete/:qid",deleteQuestion)


module.exports = router;