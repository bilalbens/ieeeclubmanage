const User = require('../models/user')
const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')
const Joi = require('joi')
const { findSourceMap } = require('module')
const { valid } = require('joi')


exports.getOneUser = (req,res) =>{
    res.json({
        user:req.profile
    })
}

exports.updateOneUser = (req,res) =>{

    User.findOneAndUpdate({_id: req.profile._id}, {$set: req.body}, {new:true}, (err, user) =>{
        if(err){
            return res.status(400).json({err})
        }

        res.json({user})
    })
}



exports.setUserPhoto =(req,res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtension = true;

    form.parse(req, (err, fields, files)=>{
        if(err){
            return res.status(400).json({
                error: "image could not upload"
            })
        }

        let user = req.profile
        if(fields){
            user = _.extend(user, fields)
        }
        

        if(files.photo){
            if(files.photo.size > Math.pow(40, 6)){
                return res.status(400).json({
                    error: "image should be less than 2 mb in size "
                })
            }

            user.photo.data = fs.readFileSync(files.photo.path)
            user.photo.contentType = files.photo.type
        }


        user.save((err, user) => {
            if(err) {
                return res.status(400).json({
                    error: 'user not persist ',
                    err
                })
            }

            res.json({
                user
            })
        })

    })


}


exports.userPhoto = (req,res)=>{
    const {data,ContentType}=req.profile.photo;

    if(data){
        res.set('Content-Type',ContentType)
        return res.send(data)
    }
    else{
        return res.json({error:true})
    }
    // else{
    //     return res.json({ok:false});

    // }
}


exports.AllUsers = (req, res) => {

    let limit = req.query.limit ? parseInt(req.query.limit) : 7;
    let skip = parseInt(req.query.skip);


    User.find()
    .select("-hashed_password -salt -updatedAt")
    .limit(limit)
    .skip(skip)
    .exec((err, users)=>{
        if(err){
            return res.status(500).json({error: err})
        }

        res.json({users})
    })
}


exports.VerifyUser = (req, res) => {
    User.findOneAndUpdate({_id: req.profile._id}, {$set: {"status": 1}}, (err, user) =>{
        if(err){
            return res.status(400).json({err})
        }

        res.status(201).json({"message": "user verified successfully",})
    })

}


exports.deleteUser = (req, res) => {
    let user = req.profile
    User.remove({ "_id":user._id },(err,user)=>{
        if(err){
            return res.status(404).json({
                error:"user not found"
            })
        }

        res.status(204).json({delete: "deleted successfully from backend"})
    })
}   





// exports.AllUsers = (req, res) => {

//     let limit = req.query.limit ? parseInt(req.query.limit) : 7;
//     let skip = parseInt(req.query.skip);
//     let search =  req.query.search ? req.query.search : 'bilal';

//     console.log(search)

//     User.find({ "firstname": `${search}` })
//     .select("-hashed_password -salt -updatedAt")
//     .limit(limit)
//     .skip(skip)
//     .exec((err, users)=>{
//         if(err){
//             return res.status(500).json({error: err})
//         }

//         res.json({users})
//     })
// }
