import mongoose from "mongoose";
import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";


export async function sendMessage(req,res){
    const {chat_id,sender_id, reciever_id, content}=req.body;
    if(!content || !sender_id || !reciever_id||!chat_id){
        return res.status(400).send({
            message:"Missing ..."
        })
    }
    if(!mongoose.Types.ObjectId.isValid(sender_id) || !mongoose.Types.ObjectId.isValid(reciever_id)){
        return res.status(400).send({
            message:"ID is of invalid format..."
        })
    }

    try{
        const chat=await Chat.find({chat_id});
        if(!chat){
            return res.status(400).send({
                message:"No available chat..."
            })
        }
        
        const new_message = {
            sender: sender_id,
            reciever: reciever_id,
            message: content
        }

        const messages = Chat.messages;
        messages.push(new_message);
        return res.send({
            sender: sender_id,
            reciever: reciever_id,
            message: content
        })

    } catch(error){
        console.log(error.message);
        return res.status(500).send("Internal Server Error");
        }
}

export async function addChat(req,res){
    const {email,logged_in_id}=req.body;
    // Validate email form

    // Make sure email is in db

    try {
        const chat_user=await User.findOne({email});
        const chat=await Chat.create({
            user_one:logged_in_id,
            user_two: chat_user._id

        })
        return res.send({
            user_one:logged_in_id,
            user_two: chat_user._id 
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server Error");
        }
    }

