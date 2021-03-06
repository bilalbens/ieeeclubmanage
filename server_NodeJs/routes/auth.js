const express = require('express')
const router = express.Router();
const {signup, signin, signout } =require('../controllers/authController')
const {userSignUpValidator} = require('../middlewares/userValidaator')

router.post("/signup",userSignUpValidator, signup)
router.post("/signin", signin)
router.get("/signout", signout)

module.exports = router