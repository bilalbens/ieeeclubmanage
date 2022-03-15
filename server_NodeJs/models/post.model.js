const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        maxLength:250,
        trim:true
    },
    description:{
        type:String,
        require:true,
        maxlength:600,
    },
    content:{
        type:String,
    },
    photo:{
        data:Buffer,
        contentType: String,
    }

},{timestamps:true})

module.exports = mongoose.model("Post", postSchema)