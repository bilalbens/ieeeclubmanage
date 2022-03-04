const expressJwt = require('express-jwt')
require('dotenv').config




//check if the user is sign in
exports.requireSignIn = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'auth'

})



//check if the user sign in is the one who is authenticated

exports.isAuth = (req,res, next) =>{
    let user = req.profile && req.auth && (req.profile._id == req.auth._id)

    if(!user){
        return res.status(403).json({message: 'Access Denied'})
    }
    next();
}


//check if the user sign in is and admin

exports.isAdmin = (req,res, next) =>{
    let user = req.auth

    if(user.role === 0 ){
        return res.status(403).json({message: 'Access Denied'})
    }
    next();
}






