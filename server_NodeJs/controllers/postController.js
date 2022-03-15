const Post = require("../models/post.model")
const formidable = require("formidable")
const fs = require("fs")
const _ = require("lodash")


exports.createPost = (req,res) =>{
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;

        form.parse(req, (err, fields, files)=>{
            if(err){
                return res.status(400).json({
                    error: 'Image could not uploaded !'
                })
            }

            let post = new Post(fields);

            if(files.photo){
                if(files.photo.size > Math.pow(40, 6)) {
                    return res.status(400).json({
                        error: 'Image should be less than 1.5mb in size !'
                    })
                }

                post.photo.data = fs.readFileSync(files.photo.path)
                post.photo.contentType = files.photo.type

            }

            post.save((err,post)=>{
                if(err){
                    return res.status(400).json({
                        error:"Post not persist"
                    })
                }

                res.status(200).json({
                    post
                })
            })

        })
}


exports.allPosts = (req,res) =>{

    let limit = req.query.limit ? parseInt(req.query.limit) : 7;
    let skip = parseInt(req.query.skip);


    Post.find()
    .select("-__v -updatedAt")
    .limit(limit)
    .skip(skip)
    .exec((err, posts)=>{
        if(err){
            return res.status(500).json({error: err})
        }

        res.json({posts})
    })

}


//middelware
exports.postById = (req,res,next,id) =>{
    Post.findById(id)
        .exec((err,post)=>{
            if(err || !post){
                return res.status(404).json({
                    error:"post not found"
                })
            }

            req.post = post
            next()
        })
}

exports.updatePost = (req,res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err,fields, files)=>{
        if(err){
            return res.status(400).json({
                error: "image could not uploaded"
            })
        }

        let post = req.post 
        post = _.extend(post, fields)

        if(files.photo){
            if(files.photo.size > Math.pow(40, 6)) {
                return res.status(400).json({
                    error: 'Image should be less than 1.5mb in size !'
                })
            }

            post.photo.data = fs.readFileSync(files.photo.path)
            post.photo.contentType = files.photo.type

        }

        post.save((err,post)=>{
            if(err){
                return res.status(400).json({
                    err:"Post not updated"
                })
            }

            res.json({
                post
            })
        })

    })

}



exports.deletePost = (req,res) =>{
    let post = req.post
    Post.remove({ "_id":post._id },(err,post)=>{
        if(err){
            return res.status(404).json({
                error:"post not found"
            })
        }

        res.status(204).json()
    })
}
