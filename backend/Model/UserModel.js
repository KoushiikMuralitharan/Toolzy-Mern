const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
        firstname: String,
        lastname: String,
        email:String,
        password: String,
        role:{
            type:String,
            default: "visitor"
        }
})

const userModel = mongoose.model('users',UserSchema);
module.exports = userModel;