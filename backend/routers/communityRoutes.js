const router = require("express").Router()
const { addingCommunityPosts ,getAllCommunityPosts } = require("../controllers/communityController/communityController")
const { verifyJWT } = require("../middleware/adminMiddleware")

//admin adding post

router.post("/add-community-posts",addingCommunityPosts)
router.get("/get-community-posts",getAllCommunityPosts)



module.exports = router;