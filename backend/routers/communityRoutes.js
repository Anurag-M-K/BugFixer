const router = require("express").Router()
const { addingCommunityPosts ,getAllCommunityPosts ,deleteCommunity  } = require("../controllers/communityController/communityController")
const { verifyJWT } = require("../middleware/adminMiddleware")


router.post("/add-community-posts",addingCommunityPosts)
router.get("/get-community-posts",getAllCommunityPosts)
router.delete("/community-delete",verifyJWT , deleteCommunity)

module.exports = router;