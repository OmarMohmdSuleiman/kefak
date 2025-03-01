import mongoose from "mongoose";

const userScehma=new mongoose.Schema(
    {
        firstName:{type:String, required:true},
        lastName:{type:String},
        email:{type:String, required:true, unique:true},
        password:{type:String,required:true},
        createdAt:{type:Date,default:Date.now}
    }
);


const User=mongoose.model("User",userScehma);

export default User;