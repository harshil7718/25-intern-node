
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        // unique:true
    },
    password:{
        type:String,
        required:true
    },
    // phone:{
    //     type:String,
    //     required:true
    // },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        // enum:["admin","user"],
        // default:"user"
        ref:"roles"
    }



},
{
    timestamps:true
}
)

module.exports = mongoose.model("users",userSchema)
