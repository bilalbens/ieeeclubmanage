const mongoose = require('mongoose');
const crypto = require('crypto')
const {v1: uuid} = require('uuid');
const { get } = require('http');
const { model } = require('mongoose');
const {ObjectId} = require('mongoose')


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        trim: true,
        maxlength: 10,
        required: true,
        unique: true
    },
    committee: {
        type: String,
        trim: true,
        maxlength: 15,
        required: true,
    },
    branch: {
        type: String,
        trim: true,
        maxlength: 15,
        required: true,
    },
    status: {
        type: Number,
        trim: true,
        default:0
    },

    hashed_password:{
        type: String,
        required: true,
    },
    salt: {
        type: String
    },
    role:{
        type:Number,
        default:0
    },  
    ieeeId:{
        required: true,
        type:Number,
        maxlength: 8,
        unique: true,
    }, 
    photo:{
        data:Buffer,
        contentType: String,
    }
}, {timestamps:true})


userSchema.virtual('password')
.set(function(password){
    this._password = password;
    this.salt = uuid();
    this.hashed_password = this.cryptPassword(password)
})
.get(function() {
    return this._password;
})

userSchema.methods = {
    authenticate: function(userpassword){
        return this.cryptPassword(userpassword) === this.hashed_password;
    },

    cryptPassword: function(password) {
        if(!password) return '';

        try {

            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
            
        } catch (error) {
            return ''
        }
    }
}

module.exports = mongoose.model('User', userSchema);