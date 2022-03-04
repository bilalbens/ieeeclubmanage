const express = require('express');
const router = express.Router();
const {getOneUser, updateOneUser,setUserPhoto, userPhoto,AllUsers, VerifyUser, deleteUser} = require('../controllers/userController')
const {requireSignIn,isAuth} = require('../middlewares/auth')
const {userById} = require('../middlewares/user')


router.get('/:userId',requireSignIn,isAuth, getOneUser)
router.post('/uploaduserphoto/:userId',requireSignIn,isAuth, setUserPhoto)
router.put('/:userId',requireSignIn,isAuth, updateOneUser)
router.get('/photo/:userId', userPhoto)
router.post('/verify/:userId', VerifyUser)
router.delete('/:userId', deleteUser)
router.get('/', AllUsers)



router.param('userId', userById)

module.exports = router