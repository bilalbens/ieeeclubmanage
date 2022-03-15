const express = require("express")
const { requireSignIn, isAuth, isAdmin } = require("../middlewares/auth")
const { userById } = require("../middlewares/user")

const {
    createPost,
    allPosts,
    postById,
    updatePost,
    deletePost

    } = require("../controllers/postController")

const router = express.Router()


router.post("/create/:userId", [requireSignIn, isAuth, isAdmin], createPost)
router.get("/", allPosts)
router.put("/:postId/:userId",[requireSignIn, isAuth, isAdmin], updatePost)
router.delete("/:postId/:userId",[requireSignIn, isAuth, isAdmin], deletePost)

router.param('userId', userById)
router.param('postId', postById)


module.exports = router
