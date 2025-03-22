import mongoose from "mongoose";
import User from "./user.model.js";

const messageSchema= new mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    reciever:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    message:{type:String,required:true},
},{timestamps:true}
);

const chatSchema= new mongoose.Schema(
    {
        user_one:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
        user_two:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
        messages:[messageSchema]

        
    }
)



const Chat=new mongoose.model("Chat", chatSchema);

export default Chat;