import mongoose, { Schema } from 'mongoose'

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        trim:true
    }
},{timestamps:true});

export const User=mongoose.model("User",userSchema);
